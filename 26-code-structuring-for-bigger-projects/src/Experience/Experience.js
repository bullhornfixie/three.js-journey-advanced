import Sizes from "./Utils/Sizes"

export default class Experience 
{
    constructor(canvas) 
    {
      // Global access                      
      window.experience = this // This enables you to access class via console

      // Canvas 
      this.canvas = canvas

      // Canvas sizing setup 
      // Instantiate new sizes class 
      this.sizes = new Sizes() 
     
      // The sizes class inherited the on method from EventEmitter class 
      this.sizes.on('resize', () => 
      {
        console.log('I heard a resize')
      })
    }
}
