import * as THREE from 'three';
import Experience from "../Experience";
import Environment from './Environment.js';
import Floor from './Floor';
import Fox from './Fox';

export default class World 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => 
        {
            // Objects for scene
            this.floor = new Floor() 
            this.fox = new Fox()
            // Environment for scene
            this.environment = new Environment()
        })
        
    }
}