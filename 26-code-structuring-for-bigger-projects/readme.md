# Chapter 26 - Code Structuring For Bigger Projects 

![alt text](./static/screenshot-lesson-25.png)

## Introduction 
To this point, all the exercises have been small enough to fit into a single JavaScript file without struggling too much. We've separated the different parts of our code by using block comments, and we've scrolled a lot.

But real life projects tend to have much more code and this lesson shows us how to structure the code using concepts like classes and modules. 

## Key Learning Points
- Classes
- Modules 
- Setting up classes for resizing canvas 
- `Singleton` a class that can only be instantiated once
- Light onky reacts to `MeshStandardMaterial`

## Classes
- Classes allow us to use Object Orientated Programming (OOP)
- Classes are blueprints for objects e.g. a robot 
- We can then create many robots using the same blueprint 
- Functions inside classes are called `methods`
- `constructor()` method is called automatically when a class is instantiated 
- Standard methods need to be explicitly called 
- By using `this.name = name` you are giving the class a property

### Inheritance
- `Inheritance` is like creating a class based on another class
- E.g. you create a house class and you want to create another house but with another floor
- `class FlyingRobot extends Robot`
- If you use a method in the child class with the same method name as parent class - it will override base method 
- This is also true with constructor but you have to use `super()`

### Modules 
- Used to break down large chunks of javaScript into smaller pieces 
- Keep it simple but exporting one thing per file 

### Tip 
- When you **import** modules from scripts it is not mandatory to include .js but it's good practice
- As in webpack you can import css etc and it's clearer what type of file you are importing

### Webpack 
- It is a BUILD PROCESS
- It is taking your files, running through a conversion and spitting them out into something browser understands 
- It has features such as `tree shaking` removing dead code 
- Next.js uses webpack 

## Resources 
[What is webpack?](https://www.youtube.com/watch?v=nfmvexyoHXE)
