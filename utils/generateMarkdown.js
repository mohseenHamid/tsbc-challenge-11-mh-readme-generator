const { splitLines } = require("./other");

// function that generates the README based on the inquirer response data
const generateMarkdown = (data, licenseBadge) =>
	`# ${data.pageTitle}

${licenseBadge}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${splitLines(data.usageInstructions)}

## License
This product is covered under the ${data.license}

## Contributing
${splitLines(data.contributionGuidelines)}

## Tests
${splitLines(data.testInstructions)}

## Questions
- If you have any queries, reach out to me via email by clicking [here](mailto:${
		data.emailAddress
	}) 
- Feel free to visit my GitHub profile by clicking [here](https://github.com/${
		data.userName
	}).`;

module.exports = generateMarkdown;
