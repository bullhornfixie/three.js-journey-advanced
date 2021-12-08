import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter

{
    constructor()
    {
        super()

        // Setup 
        this.width = window.innerWidth 
        this.height = window.innerHeight 
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        console.log('Sizes class instantiated')

        // Resize event 
        window.addEventListener('resize', () => 
        {
            this.width = window.innerWidth 
            this.height = window.innerHeight 
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}

/*
By inheriting from EventEmitter we can access it's methods such as on, off, trigger, resolveNames
If inheriting from another class and must use a super constructor. 
*/