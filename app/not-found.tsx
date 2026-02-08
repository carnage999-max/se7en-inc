import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center px-6 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-4xl space-y-7 text-center">
        <p className="font-display text-2xl uppercase tracking-[0.2em] text-marble sm:text-3xl">404 — Not Found</p>
        <div className="mx-auto max-w-md px-6">
          <div className="gold-divider" />
        </div>
        <Link
          href="/"
          className="btn-gold inline-flex items-center justify-center rounded-md px-7 py-3 text-sm uppercase tracking-[0.14em]"
        >
          Return to SE7EN
        </Link>
      </div>
    </section>
  );
}
