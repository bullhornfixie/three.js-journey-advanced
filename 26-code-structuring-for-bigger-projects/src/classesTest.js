class Robot 
{
    constructor(name, legs)
    {
      this.name = name 
      this.legs = legs

      console.log(`I am ${this.name}. Thank you creator`)
    }
    sayHi() 
    {
      console.log(`Hello! My name is ${this.name}`)
    }
}

class FlyingRobot extends Robot 
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


const wallE = new Robot('Wall-E', 0)
const ultron = new FlyingRobot('Ultron', 2)
const astroBoy = new FlyingRobot('Astro Boy', 2)

astroBoy.sayHi()
astroBoy.takeOff()
console.log(astroBoy.legs)
