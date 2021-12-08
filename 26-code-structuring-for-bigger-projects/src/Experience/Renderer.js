import Experience from './Experience.js'
import * as THREE from 'three'

export default class Renderer
{
    constructor()
    {
        // Make experience class available in Renderer class 
        this.experience = new Experience()
        this.canvas = this.experience.canvas 
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene 
        this.camera = this.experience.camera 

        console.log('Renderer class instantiated')

        this.setInstance()
    }

    // Instantiate WebGLRenderer 
    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
          canvas: this.canvas,
          antialias: true
        })

        console.log(this.instance)
    }
}
