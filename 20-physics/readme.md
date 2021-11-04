# Chapter 20 - Physics 

## Intro 
In this chapter we learn about physics which is one of the coolest features to add to a 3D website. 

[Bruno Simon Portfolio](https://bruno-simon.com/)
[OUIGO Let's Play](http://letsplay.ouigo.com/)

## Key Learning Points 
- create own physics with some maths and `Raycaster`
- or use a library if you want realistic physics
- 3D physics libraries; Ammo.js, Cannon.js, Oimo.js
- Physijs combines three.js and physics 
- cannon.js is the one use in this lesson `npi i cannon`
- create a 3D world and a 2D physics world 
- in three.js we create **meshes** in cannon.js we create **bodies**
- if you want to create a body, you need to create a shape first 

### Three.js and physics world 
- you want the three.js world to update according to physics world 
- gravity is - and mass + > ball will fall 
- gravity is + and mass + > ball will rise 

- if an object has a mass of 0 it will be static 
- a plane in cannon.js is infinite (no edges)
- a plane in three.js has edges 

### Can you change the material composite in cannon.js?
- the plane is static so it has a mass of 0 
- yes, you could change density so it's like concrete or jelly 
- this is useful for say a ball bouncing on material

- assigned `plasticMaterial` to `floor`
- assigned `concreteMaterial` to `floor`
- increase restitution of contact material, ball bounces higher 
- then combined these materials to create a single **default material**
- update the material on floor and sphere with `defaultContactMaterial` 
- or `world.defaultContactMaterial = defaultContactMaterial`

### Applying forces to a body
- `applyForce` apply a force from a specified point 

### Multiple objects in scene 
- removed three.js and cannon.js sphere 
- created a function which creates single sphere in three.js and cannon.js 
- `createSphere(radius, position)`
- each time function is called pushes a sphere to an array 
- we then loop over array 

## Resources 




