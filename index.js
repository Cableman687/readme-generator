// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// var chooseLicense = function(response){

//     console.log(response);

    
// }


function startPrompts() {
    // TODO: Create an array of questions for user input
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "How would you describe your project?",
            name: "description",
        },
        {
            type: "input",
            message: "How do you install this project?",
            name: "installation",
        },
        {
            type: "input",
            message: "How do you use this application?",
            name: "usage",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license are you using? Please select from the below: ',
            choices: [
                'None',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'Boost Software License 1.0',
                'GNU Affero General Public License v3.0',
                'GNU Lesser General Public License v3.0',
                'Mozilla Public License 2.0',
                'The Unlicense',
    
            ],
            default: 'None',
            
        },
        {
            type: "input",
            message: "How does someone contribute to this project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "How does someone test this project?",
            name: "testing",
        },
        {
            type: "input",
            message: "What is your github username? (Case sensitive)",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
    ])
    .then(({title, description, installation, usage, license, contributing, testing, username, email}) => {

        const data = {
            title,
            description,
            installation,
            usage,
            license,
            contributing,
            testing,
            username,
            email,

        }

        const final = generateMarkdown(data);
        writeToFile(final);
    }
    

)}

// TODO: Create a function to write README file
function writeToFile(data){
    fs.writeFile('READMEgen.md', data, (err) => 
    err ? console.error(err) : console.log("Success!"))
   }

// TODO: Create a function to initialize app
function init() {
    startPrompts();
}


// Function call to initialize app
init();








