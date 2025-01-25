// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import path from "path";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    name: "contributing",
  },
  {
    type: "list",
    message: "Which license did you use?",
    name: "license",
    choices: ["MIT", "ISC", "other", "none"],
  },
  {
    type: "input",
    message: "Provide examples on how to run tests on your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "How would you test your app?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), "Output", fileName), data, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("README file has been generated successfully!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const formattedData = generateMarkdown(answers);
    writeToFile("readMe.md", formattedData);
  });
}

// Function call to initialize app
init();
