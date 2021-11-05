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

## Resources 