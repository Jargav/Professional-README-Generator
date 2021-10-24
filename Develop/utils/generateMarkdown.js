
function renderTitle(title) {!title ? '' : title};

function renderTableOfContents() {
  return `## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#testing)
  - [Questions](#questions)
  
  `
}

function renderDescriptionSection(description) {return !description ? '' : description};

function renderInstallatinSection(installation) {return !installation ? '' : 
`\`\`\`md
${installation}
\`\`\`
`};

function renderUsageSection(usage) {return !usage ? '' : usage};

function renderCreditsSection(credits) {return !credits ? '' : credits};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {return !license ? '' : `[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`}; 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {return !license ? '' : `[![license](https://choosealicense.com/licenses/${license})`}; 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {return !license ? '' : `This project is licensed under the ${license} license. For more information. please visit ${renderLicenseLink(license)}.`}; 

function renderContributingSection(contributing) {return !contributing ? '' : contributing};

function renderTestsSection(tests) {return !tests ? '' : tests};

function renderQuestionsSection(emailAddress, gitHubUsername) {
  const github = `[${gitHubUsername}](http://github.com${gitHubUsername})`;
  
  if (!emailAddress && !gitHubUsername) {
    return ''
  } else if (!emailAddress) {
    return `Feel free to email me at ${emailAddress} if you have any further questions.`
  } else if (!gitHubUsername) {
    return  `You can find my github at ${github}.` 
  } else {
    return `You can find my github at ${github}. Feel free to email me at ${emailAddress} if you have any further questions.`
  };
}; 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderTitle(data.title)} ${renderLicenseBadge(data.license)}
  ${renderTableOfContents()}

  ## Description 
  ${renderDescriptionSection(data.description)}

  ## Installation
  ${renderInstallatinSection(data.installation)}

  ## Usage
  ${renderUsageSection(data.usage)}

  ## Credits
  ${renderCreditsSection(data.credits)}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${renderContributingSection(data.contributing)}

  ## Tests
  ${renderTestsSection(data.tests)}

  ## Questions
  ${renderQuestionsSection(data.emailAddress, data.gitHubUsername)}
  
`;
}

module.exports = generateMarkdown;
