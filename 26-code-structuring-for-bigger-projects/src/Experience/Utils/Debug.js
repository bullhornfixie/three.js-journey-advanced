import * as dat from 'dat.gui'

export default class DeBug 
{
    constructor()
    {
        this.active = window.location.hash === '#debug'

        // add #debug to url to activate dat.gui
        if(this.active)
        {
            this.ui = new dat.GUI()
        }
    }
}