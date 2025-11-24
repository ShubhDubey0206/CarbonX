import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Globe } from './GLobe.jsx'
import { Earth_hologram } from './Earth_hologram.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera = {{ position: [0,0,15], fov: 50}}>
        {/* <ambientLight intensity={0.5} color="#1a1a40"/>
        <directionalLight position={[5,5,5]} intensity={1} /> */}
        <ambientLight intensity={1} />
        <directionalLight intensity={2} />

        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={10}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        />
        <group
        scale = {isMobile ? 1.5 : 2}
        >
            {/* <Globe /> */}
            <Earth_hologram />
        </group>
    </Canvas>
  )
}

export default HeroExperience