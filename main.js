#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let useranswer = await inquirer.prompt([
    {
        name: "From",
        message: "enter your currency",
        type: "list",
        choices: [
            { name: "USD", value: "USD" },
            { name: "EUR", value: "EUR" },
            { name: "GBP", value: "GBP" },
            { name: "INR", value: "INR" },
            { name: "PKR", value: "PKR" }
        ],
    },
    {
        name: "to",
        message: "enter your currency",
        type: "list",
        choices: [
            { name: "USD", value: "USD" },
            { name: "EUR", value: "EUR" },
            { name: "GBP", value: "GBP" },
            { name: "INR", value: "INR" },
            { name: "PKR", value: "PKR" }
        ],
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[useranswer.From];
let toAmount = currency[useranswer.to];
let amount = useranswer.amount;
let baseamount = amount / fromAmount;
let convertedamount = (baseamount * toAmount).toFixed(2);
console.log(convertedamount);
