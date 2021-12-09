import * as THREE from 'three';
import EventEmitter from "./EventEmitter.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super()

        // Options
        this.sources = sources // array 

        // Setup
        this.items = {}
        this.toLoad = this.sources.length 
        this.loaded = 0 

        this.setLoaders()
        this.startLoading()
    }

        setLoaders()
        {
            this.loaders = {}
            this.loaders.gltfLoader = new GLTFLoader()
            this.loaders.textureLoader = new THREE.TextureLoader()
            this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
        }

        startLoading()
        {
            // Load each source by looping through array
            // for(element in array)
            for(const source of this.sources)
            {
                if(source.type === 'gltfModel')
                {
                    this.loaders.gltfLoader.load(
                        source.path,
                        (file) =>
                        {
                            // call function 
                            this.sourceLoaded(source, file)
                        }
                    )
                }
                else if(source.type === 'texture')
                {
                    this.loaders.textureLoader.load(
                        source.path,
                        (file) =>
                        {
                            // call function
                            this.sourceLoaded(source, file)
                        }
                    )
                }
                else if(source.type === 'cubeTexture')
                {
                    this.loaders.cubeTextureLoader.load(
                        source.path,
                        (file) =>
                        {
                            // call function
                            this.sourceLoaded(source, file)
                        }
                    )
                }
            }
        }

        sourceLoaded(source, file)
        {
           // add file as an array to items object
           this.items[source.name] = file
           
           // increment loaded count
           this.loaded++

           if(this.loaded === this.toLoad)
           {
               // Create event when the loads are ready
               this.trigger('ready')
           }
        }
}