import * as THREE from 'three'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'

let instance = null 

/* Soon as the class is instantiated, the above variable will be updated. When the class is instantiated 
a second time it will return a copy of the original instance. 

The reason being, the experience requires the canvas to be constructed. If we create two instances of Experience 
we will have two canvases which causes the call stack to be exceeded and crash. 

This class is a singleton which means it can only be instantiated once. 
*/


export default class Experience 
{
    constructor(canvas) 
    {
      if(instance) 
      {
        return instance
      }
      
      instance = this

      // Global access                      
      window.experience = this // This enables you to access class via console

      // Canvas 
      this.canvas = canvas

      console.log('Experience class instantiated')

      // Setup other classes and instantiate
      this.sizes = new Sizes() 
      this.time = new Time()
      this.scene = new THREE.Scene()
      this.camera = new Camera() // sending experience class as parameter to access sizes and width
      this.renderer = new Renderer()
      this.world = new World()

      
      // Sizes resize event 
      // on() is imported from EventEmitter
      this.sizes.on('resize', () => 
      {
        this.resize() // listens for a resize and calls resize method below which updates camera and renderer class
      })

      // Time tick event 
      this.time.on('tick', () => {
        this.update()
      })
    }
    
    resize()
    {
        console.log('A resize occured')

        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.camera.update()
        this.renderer.update()
    }

}
