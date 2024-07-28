import { calculates } from "./data.js";

                                            // problem 1

const person0={
    name:"mokchhedul",
    age:19
}

const {name, age}= person0
console.log(`ES6 Destructureing is  ${name} ${age}`);



                                                                                                

                                            // problem 2

const result = calculates(5)
console.log(result);



                                            // problem 3

class Rectangle{
    constructor(width, height){
        this.width=width
        this.height=height
    }
    area(){
        return this.width*this.height
    }
}

const calculateArea = new Rectangle(10, 5)
console.log(calculateArea.area());


                                            // problem 4


const person={
    fullName:"md mokchhedul islam",
    age:19,
    get getterFullName(){
        return this.fullName
    }

}
console.log(person.getterFullName);


const person2={
    fullName:"md mokchhedul",
    age:19,
    set setterFullName(setName){
        return this.fullName
    }
}

let setFullNameIs=person2.setterFullName="md mokchhedul islam";
console.log(setFullNameIs);
                                        
                                            // problem 5




let Circle = class{
    constructor(radius){
        this.radius=radius
    }
    circumference(){
        return 2*Math.PI*this.radius
    }
}

let calculate = new Circle(2)
console.log(calculate.circumference());


                                            // problem 6


let variable= "userName"
const person1={
    age:19,
    [variable]:"mokchhedul islam"
}
console.log(person1);

                                            // problem 7

class Animal{
    constructor(name){
        this.name=name
    }
}

class Dog extends Animal{
    constructor(name, color){
        super(name)
        this.color=color
    }
}

const data = new Dog("dog", "black")
console.log(data);


                                            // problem 8


// class Shape{
//     constructor(name){
//         if (new.target===Shape) 
//             throw new Error("Cannot be instantiated directly")
//         this.name=name
//     }
// }
// const data = new Shape("mokchhedul")
// console.log(data);


                                            // problem 9

// class MathUtil{
//     constructor(a){
//         this.a=a
//     }
//     static square(){
//         return this.a*this.a
//     }
// }
// const squareResult = new MathUtil(10)
// console.log(squareResult.square());


                                            // problem 10

let age1 = Symbol("age")
const about={
    name:"md mokchhedul islam",
    [age1]:19
}

console.log(about);

