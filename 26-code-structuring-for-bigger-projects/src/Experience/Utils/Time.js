import EventEmitter from "./EventEmitter"

export default class Time extends EventEmitter
{
    constructor()
    {
        super()
        
        // Setup
        this.start = Date.now()
        this.current = this.start 
        this.elapsed = 0
        this.delta = 16 // default screens are running at 16 fps

        console.log('Time class instantiated')

        window.requestAnimationFrame(() => 
        {
          this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start // time since experience started

        this.trigger('tick')

        // You will see this outputs a number close to 16 as comuputer is running at 16 fps
        // console.log(this.delta)
        
        /* 
        Method tells browser that you wih to perform an animation and requests that the browser
        calls a specified function to update an animation before the next repaint. Method takes 
        a call back as an argument to be invoked before next repaint.
        */
        window.requestAnimationFrame(() => 
        {
          this.tick()
        })
    }
}