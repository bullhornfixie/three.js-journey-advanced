import Robot from './Robot.js'

export default class FlyingRobot extends Robot 
{
   constructor(name, legs)
   {
     super(name, legs)
     super.sayHi() // this is referring to base class method 
     this.sayHi() // refers to current method 
   }

   sayHi()
   {
       console.log(`Hello I am the new class`)
   }

   takeOff()
   {
     console.log(`Have a good flight ${this.name}`)
   }
}

