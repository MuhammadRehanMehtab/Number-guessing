import inquirer from "inquirer";

// 1) computer will generate a random number - Done.
// 2) user input for guessing number - Done
// 3) compare user input with computer genrated number and show result - do

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
{
 name: "userGuessedNumber",
 type: "number",
 message: "please guess a number between 1-6: ",
},
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guessed right number.");
}
else {console.log("You guessed wrong number");

};