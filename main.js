import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "ENTER YOUR AGE?",
    }]);
console.log(chalk.red("Insha Allah,in" + " " + (60 - answers.age) + " " + "years you will be 60 years old"));
