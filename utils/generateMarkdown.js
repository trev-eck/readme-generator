// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  switch (license) {
    case "Apache":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Creative Commons":
      licenseBadge = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
      break;
    case "GNU":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozilla":
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "Open Data Commons":
      licenseBadge = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
      break;
      default:
        licenseBadge = "";
        break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `7. [License](##license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `## License
This application was developed under the ${license} License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseObj = {
    badge: renderLicenseBadge(data.license),
    link: renderLicenseLink(data.license),
    section: renderLicenseSection(data.license),
  };
  return licenseObj;
  //return `# ${data.title}`;

  //all of the functions above should get called in here
}

module.exports = generateMarkdown;
