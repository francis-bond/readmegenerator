// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`
      
    case "GNU GPLv3":
      return `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`

    case "Apache":
      return `[![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js)`

    case "Mozilla Public":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

    default: 
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return ``
    case "GNU GPLv3":
      return ``
  
    case "Apache":
      return ``
  
    case "Mozilla Public":
      return ``
  
    default: 
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var badge = renderLicenseBadge(license)
  var link = renderLicenseLink(license)
  
  return `${badge} 
  ${link}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = renderLicenseSection(data.license)
  
return `# ${data.title}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${license}

## How to Contribute

${data.contribution}

## Tests

${data.test}

## Questions

[Github](https://github.com/${data.github})

Reach me with more question at ${data.email}`
}

module.exports = generateMarkdown;
