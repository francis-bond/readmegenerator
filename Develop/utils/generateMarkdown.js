// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]`

    case "GNU GPLv3":
      return `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)]`

    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`

    case "Mozilla Public":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`

    default: 
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return `(https://lbesson.mit-license.org/)`

    case "GNU GPLv3":
      return `(http://perso.crans.org/besson/LICENSE.html)`
  
    case "Apache":
      return `(https://opensource.org/licenses/Apache-2.0)`
  
    case "Mozilla Public":
      return `(https://opensource.org/licenses/MPL-2.0)`
  
    default: 
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var badge = renderLicenseBadge(license)
  var link = renderLicenseLink(license)
  
  return `${badge} ${link}`
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
- [Contributing](#how-to-contribute)
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
