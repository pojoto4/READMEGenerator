// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "ISC") {
    badge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else {
    badge = "";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (license === "ISC") {
    licenseLink = `https://opensource.org/licenses/ISC`;
  } else {
    licenseLink = "";
  }

  return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'none') {
    licenseSection = '';
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
 ${renderLicenseBadge(data.license)}

## Description

 ${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

 ${data.installation}

## Usage

 ${data.usage}

## Contributing

 ${data.contributing}

## License

 [More License Info](${renderLicenseLink(data.license)})

 ${renderLicenseSection(data.license)}

## Tests

 ${data.tests}

## Questions

[My Github Profile](https://github.com/${data.questions})

You can reach me with additional questions at ${data.email}

`;
}

export default generateMarkdown;
