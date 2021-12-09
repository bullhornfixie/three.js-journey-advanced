import * as THREE from 'three';
import Experience from "../Experience";
import Environment from './Environment.js';

export default class World 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources


        // Test Mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ wireframe: false })
        )
        this.scene.add(testMesh)

        this.resources.on('ready', () => 
        {
            // Create environment map once resources ready
            this.environment = new Environment()
        })
        
    }
}