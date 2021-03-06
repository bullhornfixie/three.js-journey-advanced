# Chapter 21 - Imported Models 

## Intro 
Why do we need models? so far on the course we have created simple shapes like a cube or a house but if you want more complex shapes you need models - like a human, face, spaceship. 

## Key Learning Points 

### 3D Model File Formats 
- create own models using blender 
- many model 3D models [formats](https://en.wikipedia.org/wiki/List_of_file_formats#3D_graphics)
- OBJ, FBX, STL, PLY, COLLADA, 3DS, GLTF
- one format becoming standard is `GLTF`
- most game engines and libraries support it 

### Finding Models 
- GLTF team provides various models for testing [models](https://github.com/KhronosGroup/glTF-Sample-Models)

### GLTF File Formats 
- glTF 
- glTF-Binary np
- glTF-Draco 
- glTF-Embedded

### PBR
- physically based rendering 
- pbr materials 
- you need `ambientLight` and `directionalLight` to see models

### Importing 
- `GLTFLoader`
- you can also use a `LoadingManager` in conjunction
- the `gtlf object` comes with many children within the object group 
- sometimes a model is made up from one child and sometimes it's children
- use `Draco` file format for better performance and need `DRACOLoader`
- use `Draco` when you have larger geometries 

### Animating A 3D Model 
- create an `AnimationMixer` and send the gtlf.scene as parameter
- mixer needs to update itself on each frame 
- note, you only want the mixer to update once it's loaded object 
- can be a few seconds delay, so use a conditional 

### Tip 
- variables created inside a function are not accessible by other functions - scope 
- to fix, create var outside function first `let` not `const` 
- then update variable in function  

### THREE.js Editor 
- [link](https://threejs.org/editor/)
- like a tiny online 3D editor 
- good way to test 3D models 
- remember you can only see a mesh with a light

