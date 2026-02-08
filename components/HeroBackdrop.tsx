"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type HeroBackdropProps = {
  reducedMotion: boolean;
};

export function HeroBackdrop({ reducedMotion }: HeroBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.z = 6;

    const baseGeometry = new THREE.PlaneGeometry(10, 6, 16, 16);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x14110f),
      roughness: 0.94,
      metalness: 0.06,
      emissive: new THREE.Color(0x080605),
      emissiveIntensity: 0.2,
    });
    const basePlane = new THREE.Mesh(baseGeometry, baseMaterial);
    basePlane.rotation.x = -0.18;
    scene.add(basePlane);

    const lineCount = 64;
    const linePositions = new Float32Array(lineCount * 2 * 3);
    const linePhases = new Float32Array(lineCount);
    const lineSpeeds = new Float32Array(lineCount);

    for (let i = 0; i < lineCount; i += 1) {
      const x = (Math.random() - 0.5) * 8.6;
      const z = (Math.random() - 0.5) * 2;
      const yBottom = -3;
      const yTop = 3;
      const baseIndex = i * 6;
      linePositions[baseIndex] = x;
      linePositions[baseIndex + 1] = yBottom;
      linePositions[baseIndex + 2] = z;
      linePositions[baseIndex + 3] = x;
      linePositions[baseIndex + 4] = yTop;
      linePositions[baseIndex + 5] = z;
      linePhases[i] = Math.random() * Math.PI * 2;
      lineSpeeds[i] = 0.6 + Math.random() * 0.6;
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const linesMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0xc1a058),
      transparent: true,
      opacity: 0.35,
    });
    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    lineSegments.position.z = 0.35;
    scene.add(lineSegments);

    const ambient = new THREE.AmbientLight(0xc1a058, 0.16);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0xc1a058, 0.5, 30);
    keyLight.position.set(2, 2, 4);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xffffff, 0.18, 20);
    fillLight.position.set(-2, -1, 6);
    scene.add(fillLight);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (width === 0 || height === 0) {
        return;
      }
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    let frameId = 0;
    const start = performance.now();

    const render = (time: number) => {
      if (!reducedMotion) {
        const t = (time - start) * 0.00035;
        keyLight.position.x = 2 + Math.sin(t * 1.2) * 0.8;
        keyLight.position.y = 2 + Math.cos(t * 1.1) * 0.5;
        basePlane.rotation.z = Math.sin(t * 0.6) * 0.02;

        const positions = linesGeometry.getAttribute("position") as THREE.BufferAttribute;
        const range = 7.5;
        for (let i = 0; i < lineCount; i += 1) {
          const drift = ((t * lineSpeeds[i] + linePhases[i]) % range) - range / 2;
          const baseIndex = i * 6;
          positions.array[baseIndex + 1] = -3 - drift;
          positions.array[baseIndex + 4] = 3 - drift;
        }
        positions.needsUpdate = true;
      }
      renderer.render(scene, camera);
      if (!reducedMotion) {
        frameId = requestAnimationFrame(render);
      }
    };

    renderer.render(scene, camera);
    if (!reducedMotion) {
      frameId = requestAnimationFrame(render);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      baseGeometry.dispose();
      baseMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
