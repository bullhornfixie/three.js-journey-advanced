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
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
    
}
