#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const add_js_1 = require("./Operators/add.js");
const sub_js_1 = require("./Operators/sub.js");
const div_js_1 = require("./Operators/div.js");
const mul_js_1 = require("./Operators/mul.js");
let question = await inquirer_1.default.prompt([
    {
        message: "Enter Your Desired Num1",
        type: "number",
        name: "Num1"
    },
    {
        message: "Enter Your Desired Num1",
        type: "number",
        name: "Num2"
    },
    {
        message: "Select Your Desired Operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
]);
question.Num1;
if (question.operator === "+") {
    let result = (0, add_js_1.sum)(question.Num1, question.Num2);
    console.log(result);
}
else if (question.operator === "-") {
    let result = (0, sub_js_1.sub)(question.Num1, question.Num2);
    console.log(result);
}
else if (question.operator === "*") {
    let result = (0, mul_js_1.mul)(question.Num1, question.Num2);
    console.log(result);
}
else if (question.operator === "/") {
    let result = (0, div_js_1.div)(question.Num1, question.Num2);
    console.log(result);
}
