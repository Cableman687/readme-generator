const inquirer = require('inquirer');
const fs = require('fs');

var chooseLicense = function(response){

    console.log(response);

    switch(response.license){

        case 'None' :
            var url = "";
            var details = "No License"
            break;

        case 'Apache License 2.0' : 
            var url = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n"
            var details = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.\n";
            break;

        case 'GNU General Public License v3.0' :
            var url = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n"
            var details = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.\n";
            break;


        case 'MIT License' :
            var url = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n"
            var details = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.\n";
            break;

        case 'Boost Software License 1.0' :
            var url = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n"
            var details = "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.\n";
            break;

        case 'GNU Affero General Public License v3.0' :
            var url = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n"
            var details = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.\n";
            break;

        case 'GNU Lesser General Public License v3.0' :
            var url = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-3.0)\n"
            var details = "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.\n";
            break;

        case 'Mozilla Public License 2.0' :
            var url = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n"
            var details = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.\n";
            break;

        case 'The Unlicense' :
            var url = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n"
            var details = "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.\n";
            break;

        default :
            var url = "";
            var details = "No License"
            break;
        
    }

    return [url + "\n" + details];
}


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
.then((response) =>
    
    fs.appendFile('README.md',
    
`# ${response.title}

## Description
${response.description}
    
## Table of Contents

- [Markdown Navigation](#markdown-navigation)
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#test)
    - [Questions](#questions)
    
    
## Installation
${response.installation}
    
## Usage
${response.usage}
    
## License
${chooseLicense(response)}
    
## Contributing
${response.contributing}
    
## Tests
${response.testing}
    
## Questions
If you have any questions you would like to ask about this project, please reach out using my email below!\n
${response.email}
 
Otherwise, please feel free to check out my full profile!:\n
https://github.com/${response.username}
`
    
    , (error) =>
    {
        error ? console.error(error) : console.log('Success!')
        console.log(response);
    })
);



