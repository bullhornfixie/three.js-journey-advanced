import Experience from './Experience.js'
import Camera from './Camera.js'

export default class Renderer
{
    constructor()
    {
        // Make experience class available in Renderer class 
        this.experience = new Experience()
    }

}