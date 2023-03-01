// function that generates the README based on the inquirer response data
const generateMarkdown = (data, licenseBadge) =>
	`# ${data.pageTitle}

${licenseBadge}

## Table of Content

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

## License
This product is covered under the ${data.license}

## Contributing

## Tests

## Questions
`;

module.exports = generateMarkdown;
