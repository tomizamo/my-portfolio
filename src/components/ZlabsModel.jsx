import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ZlabsModel(props) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/zlabs.glb`)
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1.geometry}
                    material={materials['Off White Plastic Glossy']}
                    rotation={[0, 0, -Math.PI]}
                    scale={10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body2.geometry}
                    material={materials['Off White Plastic Glossy']}
                    rotation={[0, 0, -Math.PI]}
                    scale={10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body3.geometry}
                    material={materials['Off White Plastic Glossy']}
                    rotation={[0, 0, -Math.PI]}
                    scale={10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body4.geometry}
                    material={materials['Off White Plastic Glossy']}
                    rotation={[0, 0, -Math.PI]}
                    scale={10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body5.geometry}
                    material={materials['Off White Plastic Glossy']}
                    rotation={[0, 0, -Math.PI]}
                    scale={10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rectangulologo.geometry}
                    material={materials['Metalic black']}
                    rotation={[0, 0, -Math.PI]}
                    scale={10}
                />
            </group>
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/zlabs.glb`)

