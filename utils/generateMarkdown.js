// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
  
      case 'None' :
          var url = ""; 
          break;
  
      case 'Apache License 2.0' : 
          var url = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n"
          break;
  
      case 'GNU General Public License v3.0' :
          var url = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n"
          break;
  
  
      case 'MIT License' :
          var url = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n" 
          break;
  
      case 'Boost Software License 1.0' :
          var url = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n"
          break;
  
      case 'GNU Affero General Public License v3.0' :
          var url = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n"
          break;
  
      case 'GNU Lesser General Public License v3.0' :
          var url = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-3.0)\n"
          break;
  
      case 'Mozilla Public License 2.0' :
          var url = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n"
          break;
  
      case 'The Unlicense' :
          var url = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n"
          break;
  
      default :
          var url = "";
          break;
      
  }
  
  return url;
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  
    switch(license){
  
      case 'None' :
          var url = ""
          break;
  
      case 'Apache License 2.0' : 
          var url = "https://www.apache.org/licenses/LICENSE-2.0"
          break;
  
      case 'GNU General Public License v3.0' :
          var url = "https://choosealicense.com/licenses/gpl-3.0/"
          break;
  
  
      case 'MIT License' :
          var url = "https://choosealicense.com/licenses/mit/"
          break;
  
      case 'Boost Software License 1.0' :
          var url = "https://www.boost.org/users/license.html"
          break;
  
      case 'GNU Affero General Public License v3.0' :
          var url = "https://www.gnu.org/licenses/agpl-3.0.en.html"
          break;
  
      case 'GNU Lesser General Public License v3.0' :
          var url = "[https://choosealicense.com/licenses/lgpl-3.0/"
          break;
  
      case 'Mozilla Public License 2.0' :
          var url = "https://choosealicense.com/licenses/mpl-2.0/"
          break;
  
      case 'The Unlicense' :
          var url = "https://choosealicense.com/licenses/unlicense/"
          break;
  
      default :
          var url = "";
          break;
      
  }
  
  return url;
  
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    const string = `This project is licensed using the ${license} license. For more information, please use the following link:`;
    if(license){
      return [renderLicenseBadge(license) + "\n" + string + "\n" + renderLicenseLink(license)];
    } else {
      return "";
    }
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
      
## Description
${data.description}
        
## Table of Contents
    
- [Markdown Navigation](#markdown-navigation)
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#testing)
    - [Questions](#questions)
        
        
## Installation
${data.installation}
        
## Usage
${data.usage}
        
## License
${renderLicenseSection(data.license)}
        
## Contributing
${data.contributing}
        
## Tests
${data.testing}
        
## Questions
If you have any questions you would like to ask about this project, please reach out using my email below!\n
${data.email}
     
Otherwise, please feel free to check out my full profile!:\n
https://github.com/${data.username} 
  
  `;
  }
  
module.exports = generateMarkdown;