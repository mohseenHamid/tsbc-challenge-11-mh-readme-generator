const { splitLines } = require("./other");

// function that generates the README based on the inquirer response data
const generateMarkdown = (data, licenseBadge) => {
	// formatting the multiple line responses
	const installation = splitLines(data.installation);
	const usage = splitLines(data.usageInstructions);
	const contribution = splitLines(data.contributionGuidelines);
	const test = splitLines(data.testInstructions);

	// markdown to be returned
	const response = `# ${data.pageTitle}

${licenseBadge}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Mock-up](#mock-up)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${data.description}

## Installation
${installation}

## Usage
${usage}

## Mock-up
Please find a demo video of this app by clicking [here](./assets/sample-README-demo.mp4)

## License
This product is covered under the ${data.license}

## Contributing
${contribution}

## Tests
${test}

## Questions
- If you have any queries, reach out to me via email by clicking [here](mailto:${data.emailAddress}) 
- Feel free to visit my GitHub profile by clicking [here](https://github.com/${data.userName}).`;

	return response;
};

module.exports = generateMarkdown;
