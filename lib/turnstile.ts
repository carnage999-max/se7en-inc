type TurnstileSiteverifyResponse = {
  success: boolean
  action?: string
  hostname?: string
  ['error-codes']?: string[]
}

type VerifyTurnstileTokenArgs = {
  token: string
  remoteIp?: string | null
  expectedAction: string
}

type VerifyTurnstileTokenResult =
  | { ok: true }
  | { ok: false; error: string; status: number }

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const DEFAULT_ALLOWED_HOSTNAMES = ['se7eninc.com', 'www.se7eninc.com']

function getAllowedTurnstileHostnames() {
  const configuredHostnames =
    process.env.TURNSTILE_ALLOWED_HOSTNAMES?.split(',')
      .map((hostname) => hostname.trim().toLowerCase())
      .filter(Boolean) ?? []

  if (configuredHostnames.length > 0) {
    return new Set(configuredHostnames)
  }

  const allowedHostnames = new Set(DEFAULT_ALLOWED_HOSTNAMES)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (siteUrl) {
    try {
      allowedHostnames.add(new URL(siteUrl).hostname.toLowerCase())
    } catch {
      // Ignore malformed optional site URL values and keep the defaults.
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    allowedHostnames.add('localhost')
    allowedHostnames.add('127.0.0.1')
  }

  return allowedHostnames
}

export function getClientIpFromHeaders(headers: Headers) {
  const cloudflareIp = headers.get('cf-connecting-ip')?.trim()
  if (cloudflareIp) {
    return cloudflareIp
  }

  const forwardedFor = headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0]?.trim() || null
}

export async function verifyTurnstileToken({
  token,
  remoteIp,
  expectedAction,
}: VerifyTurnstileTokenArgs): Promise<VerifyTurnstileTokenResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    return {
      ok: false,
      error: 'Security check is not configured on the server.',
      status: 500,
    }
  }

  if (!token.trim()) {
    return {
      ok: false,
      error: 'Please complete the security check.',
      status: 400,
    }
  }

  const allowedHostnames = getAllowedTurnstileHostnames()
  const formData = new FormData()

  formData.append('secret', secretKey)
  formData.append('response', token)
  formData.append('idempotency_key', crypto.randomUUID())

  if (remoteIp) {
    formData.append('remoteip', remoteIp)
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      body: formData,
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) {
      return {
        ok: false,
        error: 'Security check failed. Please try again.',
        status: 502,
      }
    }

    const result = (await response.json()) as TurnstileSiteverifyResponse

    if (!result.success) {
      return {
        ok: false,
        error: 'Security check failed. Please try again.',
        status: 400,
      }
    }

    if (result.action !== expectedAction) {
      return {
        ok: false,
        error: 'Security check failed. Please refresh and try again.',
        status: 400,
      }
    }

    const hostname = result.hostname?.toLowerCase()
    if (!hostname || !allowedHostnames.has(hostname)) {
      return {
        ok: false,
        error: 'Security check failed for this host.',
        status: 400,
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error: 'Security check failed. Please try again.',
      status: 502,
    }
  }
}
