import * as THREE from 'three';
import Experience from "../Experience";
import Environment from './Environment.js';
import Floor from './Floor';

export default class World 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => 
        {
            // Create environment map once resources ready
            this.floor = new Floor() 
            // tip instantiate floor first as it's part of the scene 
            // the environment map applies to scene 
            this.environment = new Environment()
        })
        
    }
}