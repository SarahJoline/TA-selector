var inquirer = require("inquirer");
var cowsay = require("cowsay");
const TAs = ["Donny", "Mark", "Clarence", "Lawrence"];

console.log(
  cowsay.say({
    text: "What would you like to do?"
  })
);

const helpMe = () => {
  inquirer
    .prompt({
      type: "list",
      choices: ["Pick a TA", "Exit the app"],
      name: "selector"
    })
    .then(res => {
      if (res.selector === "Pick a TA") {
        var myTA = TAs[Math.floor(Math.random() * TAs.length)];
        console.log(
          cowsay.say({
            text: myTA
          })
        );
        helpMe();
      } else {
        console.log(
          cowsay.say({
            text: "Bye!"
          })
        );
        process.exit();
      }
    });
};

helpMe();
