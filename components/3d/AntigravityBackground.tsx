"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Particle system with mouse interaction
 */
function ParticleField() {
    const particlesRef = useRef<THREE.Points>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    // Generate particle positions
    const particlePositions = useMemo(() => {
        const positions = new Float32Array(100 * 3);
        for (let i = 0; i < 100; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return positions;
    }, []);

    // Mouse move handler
    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", (e) => {
            mousePos.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        });
    }

    // Animation loop
    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.0005;

            // Subtle mouse interaction
            particlesRef.current.rotation.x = THREE.MathUtils.lerp(
                particlesRef.current.rotation.x,
                mousePos.current.y * 0.1,
                0.05
            );
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particlePositions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#a78bfa"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

/**
 * Floating geometric shapes
 */
function FloatingShapes() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[-2, 1, -3]}>
                    <icosahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial
                        color="#7c3aed"
                        wireframe
                        emissive="#7c3aed"
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
                <mesh position={[3, -1, -2]}>
                    <torusGeometry args={[0.2, 0.08, 16, 32]} />
                    <meshStandardMaterial
                        color="#a78bfa"
                        wireframe
                        emissive="#a78bfa"
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
                <mesh position={[0, 2, -4]}>
                    <octahedronGeometry args={[0.25]} />
                    <meshStandardMaterial
                        color="#c4b5fd"
                        wireframe
                        emissive="#c4b5fd"
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </Float>
        </>
    );
}

/**
 * Main 3D background component
 */
export default function AntigravityBackground() {
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReducedMotion) return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <ParticleField />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
