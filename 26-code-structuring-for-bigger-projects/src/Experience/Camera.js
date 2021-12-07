import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor(experience)
    {
        // Properties 
        this.experience = experience
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setOrbitControls()
   
        // Class and properties 
        console.log(this) 
        console.log(this.canvas)
    }

    // New Camera 
    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    // Orbit Controls
    setOrbitControls()
    {
    this.controls = new OrbitControls(this.instance, this.canvas)
    }
}