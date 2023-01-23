const inquirer = require('inquirer');
const fs = require('fs');

var result = "";

var chooseLicence = function(response){
    switch(response.license){
       
        case 'None' : return "No License";
        case 'Apache License 2.0' : return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case 'GNU General Public License v3.0' : return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case 'MIT License' : return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case 'Boost Software License 1.0' : return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case 'GNU Affero General Public License v3.0' : return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case 'GNU Lesser General Public License v3.0' : return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-3.0)";
        case 'Mozilla Public License 2.0' : return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        case 'The Unlicense' : return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

        default : return "None";
        
    }
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
${chooseLicence(response)}
    
## Contributing
${response.contributing}
    
## Tests
${response.testing}
    
## Questions
If you have any questions you would like to ask about this project, please reach out using my email below!
Otherwise, 
${response.email}
Otherwise, please feel free to check out my full profile!:
https://github.com/${response.username}
`
    
    , (error) =>
    {
        error ? console.error(error) : console.log('Success!')
        console.log(response);
    })
);



