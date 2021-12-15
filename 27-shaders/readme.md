# Chapter 27 - Shaders 

## Introduction 
If we had started WebGL without Three.js, it would have been one of the first things we would have to learn and this is why native WebGL is so hard. 

A shader is a program written in GLSL (language) that is sent to the GPU. 

### We send a lot of data to the shader 
- Vertices coordinates 
- Mesh transformation 
- Information about the camera 
- Colors 
- Textures 
- Lights 
- Fog 
- Etc 

The GPU processes all this data according to the shader instructions. There a two types of shaders ***vertex shaders*** and ***fragmment shaders***

### Why do we write our own shaders if three.js offers materials with shaders?
- Three.js materials are limited 
- Our shaders can be very simple and performant 
- We can add custom post-processing

## Lesson summary 
- Learn what is a shader 
- Create our own simple shader 
- Learn the syntax 
- Do some exercises

## Key learning points 
- Using .glsl files with .js files
- Vertex shaders (plot pixels)
- Fragment shaders (color pixels)
- Attributes (data type)
- Uniforms (data type)
- `ShaderMaterial` is a three.js class (automatically adds code)
- `RawShaderMaterial` is a three.js class (no code)
- Installed `Shader Language Plugin` for VSCode
- A `linter` validates code and finds potential errors 
- Setup webpack to import glsl files > bundler/webpack.common.js
- The `rules` in webpack.common.js file are how to handle each type of file
- Learning `glsl` syntax

### What are Shaders?
- A shader is a set of instructions for the GPU executed for every pixel on the screen
- Or you could input a pixel position, state the color (RGB) > shader transformation - new color 
- This can be used for adding a blue tint to your image on screen or creating a gradient on image 

## Resources 
[What are shaders?](https://www.youtube.com/watch?v=sXbdF4KjNOc)

