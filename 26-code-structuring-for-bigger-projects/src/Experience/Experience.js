import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"

export default class Experience 
{
    constructor(canvas) 
    {
      // Global access                      
      window.experience = this // This enables you to access class via console

      // Canvas 
      this.canvas = canvas

      // Setup other classes and instantiate
      this.sizes = new Sizes() 
      this.time = new Time()
      this.scene = new THREE.Scene()
     
      // Sizes resize event 
      // on() is imported from EventEmitter
      this.sizes.on('resize', () => 
      {
        this.resize() // listens for a resize and calls resize method below 
      })

      // Time tick event 
      this.time.on('tick', () => {
        this.update()
      })
    }
    
    resize()
    {
      console.log('A resize occured')
      console.log(`width ${this.sizes.width}, height ${this.sizes.height}`)
    }

    update()
    {

    }
}
