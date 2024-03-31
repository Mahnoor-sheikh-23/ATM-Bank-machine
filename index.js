#!  /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.italic(`\n\t\t -----WELLCOME BACK TO YOUR ACCOUNT----- \n\t`));
let myBalance = 20000;
let myPin = 200725;
let pinCode = await inquirer.prompt([{
        name: "Pin",
        type: "number",
        message: "Enter your correct PinCode: "
    }]);
if (pinCode.Pin == myPin) {
    console.log(chalk.green(`\n\t Correct pin code\n `));
    let options = await inquirer.prompt([{
            name: "multioptions",
            type: "list",
            message: "Please select one Option : ",
            choices: ["Check balance", "With Drawl", "Fast Deposit"]
        }]);
    if (options.multioptions == "Check balance") {
        console.log(`\n In your account the current balance is : ${myBalance}`);
    }
    else if (options.multioptions == "With Drawl") {
        let cash = await inquirer.prompt([{
                name: "cashDeposit",
                type: "number",
                message: "How much amount you want to with drawl : "
            }]);
        if (cash.cashDeposit > myBalance) {
            console.log(chalk.italic.cyanBright(`SORRY! you have insufficient amount in your bank balance `));
        }
        else {
            myBalance = myBalance -= cash.cashDeposit;
            console.log(chalk.bold(`now youre remaining balance is :  ${myBalance}`));
        }
    }
    else if (options.multioptions == "Fast Deposit") {
        let fastWork = await inquirer.prompt([{
                name: "hurryWork",
                type: "list",
                message: "Select the option ",
                choices: ["1000", "5000", "10000", "25000"]
            }]);
        if (myBalance < fastWork.hurryWork) {
            console.log(chalk.italic.cyanBright("Oo you have insufficient amount "));
        }
        else {
            myBalance = myBalance -= fastWork.hurryWork;
            console.log(`your remaining balance is :  ${myBalance}`);
        }
    }
}
else {
    console.log(chalk.red("\n\tINCORRECT PIN CODE !!"));
}
console.log(chalk.yellowBright(`\n\t THANK YOU  `));
