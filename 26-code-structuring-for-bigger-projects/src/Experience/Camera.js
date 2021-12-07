export default class Camera
{
    constructor(experience)
    {
        this.experience = experience
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.scene

        console.log(this)
    }
}