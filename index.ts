#! /usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./Operators/add.js";
import { sub } from "./Operators/sub.js";
import { div } from "./Operators/div.js";
import { mul } from "./Operators/mul.js";
let question:{Num1:number,Num2:number,operator:string} = await inquirer.prompt([
    
    {
        message:"Enter Your Desired Num1",
        type:"number",
        name:"Num1"
    },
    {
        
       message:"Enter Your Desired Num1",
       type:"number",
       name:"Num2"

    },
    {
        
        message:"Select Your Desired Operator",
        type:"list",
        choices:["+","-","*","/"],
        name:"operator"
     }
])
question.Num1
if(question.operator === "+" ){
    let result =sum(question.Num1,question.Num2)
    console.log(result)
}
else if(question.operator === "-" ){
    let result =sub(question.Num1,question.Num2)
    console.log(result)
}
else if(question.operator === "*" ){
    let result =mul(question.Num1,question.Num2)
    console.log(result)
}
else if(question.operator === "/" ){
    let result =div(question.Num1,question.Num2)
    console.log(result)
}
