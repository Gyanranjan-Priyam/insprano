"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

// Geometric robot built from primitives
function Robot() {
  const groupRef = useRef<THREE.Group>(null)

  // Orange neon emissive color
  const orangeColor = useMemo(() => new THREE.Color("#FF7A18"), [])
  const magentaColor = useMemo(() => new THREE.Color("#FF006E"), [])
  const darkColor = useMemo(() => new THREE.Color("#1F1147"), [])
  const lightColor = useMemo(() => new THREE.Color("#F5F5F5"), [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.2}>
        {/* Head */}
        <group position={[0, 1.8, 0]}>
          {/* Main head - rounded box */}
          <mesh>
            <boxGeometry args={[0.9, 0.8, 0.8]} />
            <meshStandardMaterial
              color={darkColor}
              metalness={0.8}
              roughness={0.2}
              emissive={orangeColor}
              emissiveIntensity={0.05}
            />
          </mesh>
          {/* Visor / Eye strip */}
          <mesh position={[0, 0.05, 0.41]}>
            <boxGeometry args={[0.7, 0.15, 0.05]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </mesh>
          {/* Left eye */}
          <mesh position={[-0.2, 0.05, 0.42]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={"#ffffff"}
              emissive={lightColor}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
          {/* Right eye */}
          <mesh position={[0.2, 0.05, 0.42]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={"#ffffff"}
              emissive={lightColor}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
          {/* Antenna */}
          <mesh position={[0, 0.55, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Antenna tip */}
          <mesh position={[0, 0.72, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.3, 0]}>
          <cylinderGeometry args={[0.12, 0.15, 0.2, 8]} />
          <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Body / Torso */}
        <group position={[0, 0.6, 0]}>
          {/* Main torso */}
          <mesh>
            <boxGeometry args={[1.1, 1.2, 0.7]} />
            <meshStandardMaterial
              color={darkColor}
              metalness={0.7}
              roughness={0.3}
              emissive={orangeColor}
              emissiveIntensity={0.03}
            />
          </mesh>
          {/* Chest plate */}
          <mesh position={[0, 0.1, 0.36]}>
            <boxGeometry args={[0.6, 0.6, 0.05]} />
            <meshStandardMaterial
              color={magentaColor}
              metalness={0.5}
              roughness={0.4}
              emissive={orangeColor}
              emissiveIntensity={0.1}
            />
          </mesh>
          {/* Core light */}
          <mesh position={[0, 0.1, 0.4]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
          {/* Belt */}
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[1.15, 0.12, 0.75]} />
            <meshStandardMaterial
              color={orangeColor}
              metalness={0.6}
              roughness={0.3}
              emissive={orangeColor}
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>

        {/* Left Arm */}
        <group position={[-0.75, 0.8, 0]}>
          {/* Shoulder */}
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={darkColor} metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Upper arm */}
          <mesh position={[0, -0.35, 0]}>
            <cylinderGeometry args={[0.1, 0.08, 0.5, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Elbow joint */}
          <mesh position={[0, -0.6, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={0.3}
            />
          </mesh>
          {/* Forearm */}
          <mesh position={[0, -0.9, 0]}>
            <cylinderGeometry args={[0.08, 0.1, 0.4, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -1.15, 0]}>
            <boxGeometry args={[0.12, 0.15, 0.08]} />
            <meshStandardMaterial color={magentaColor} metalness={0.5} roughness={0.4} />
          </mesh>
        </group>

        {/* Right Arm */}
        <group position={[0.75, 0.8, 0]}>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={darkColor} metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.35, 0]}>
            <cylinderGeometry args={[0.1, 0.08, 0.5, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.6, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh position={[0, -0.9, 0]}>
            <cylinderGeometry args={[0.08, 0.1, 0.4, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, -1.15, 0]}>
            <boxGeometry args={[0.12, 0.15, 0.08]} />
            <meshStandardMaterial color={magentaColor} metalness={0.5} roughness={0.4} />
          </mesh>
        </group>

        {/* Left Leg */}
        <group position={[-0.3, -0.2, 0]}>
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.12, 0.1, 0.5, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Knee */}
          <mesh position={[0, -0.55, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={0.3}
            />
          </mesh>
          {/* Lower leg */}
          <mesh position={[0, -0.85, 0]}>
            <cylinderGeometry args={[0.1, 0.12, 0.5, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -1.15, 0.06]}>
            <boxGeometry args={[0.18, 0.1, 0.3]} />
            <meshStandardMaterial color={magentaColor} metalness={0.5} roughness={0.4} />
          </mesh>
        </group>

        {/* Right Leg */}
        <group position={[0.3, -0.2, 0]}>
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.12, 0.1, 0.5, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.55, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={orangeColor}
              emissive={orangeColor}
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh position={[0, -0.85, 0]}>
            <cylinderGeometry args={[0.1, 0.12, 0.5, 8]} />
            <meshStandardMaterial color={darkColor} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, -1.15, 0.06]}>
            <boxGeometry args={[0.18, 0.1, 0.3]} />
            <meshStandardMaterial color={magentaColor} metalness={0.5} roughness={0.4} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

// Particle field around the robot
function Particles({ count = 80 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const orangeColor = useMemo(() => new THREE.Color("#FF7A18"), [])

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    const dummy = new THREE.Object3D()

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3] + Math.sin(time * 0.3 + i) * 0.2
      const y = positions[i * 3 + 1] + Math.cos(time * 0.4 + i * 0.5) * 0.15
      const z = positions[i * 3 + 2]
      dummy.position.set(x, y, z)

      const scale = 0.02 + Math.sin(time + i) * 0.01
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color={orangeColor}
        emissive={orangeColor}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </instancedMesh>
  )
}

export function RobotScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffe0d0" />
        <pointLight position={[-3, 3, 2]} intensity={1} color="#FF7A18" distance={10} />
        <pointLight position={[3, -2, 3]} intensity={0.5} color="#FF006E" distance={8} />
        <spotLight
          position={[0, 5, 3]}
          angle={0.4}
          penumbra={0.8}
          intensity={1.2}
          color="#FF7A18"
          castShadow
        />

        <Robot />
        <Particles />
      </Canvas>
    </div>
  )
}
