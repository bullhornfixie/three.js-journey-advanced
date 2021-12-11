import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Fox
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug 

        // Debug
        if(this.debug.active)
        {
            this.debigFolder = this.debug.ui.addFolder('fox')
        }

        // Setup 
        this.resource = this.resources.items.foxModel

        this.setModel()
        this.setAnimation()
    }

    setModel()
    {
        this.model = this.resource.scene 
        this.model.scale.set(0.02, 0.02, 0.02)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

    setAnimation()
    {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        this.animation.action = this.animation.mixer.clipAction(this.resource.animations[0])

        this.animation.action.play()
    }

    update()
    {
        // note that our mixer is made to handle seconds and delta time is in milliseconds - so we use a conversion * 0.001
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}

