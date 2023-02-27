const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
// const questions = [];

// array of license objects
const licenseBank = [
	{
		license: "Apache 2.0",
		src: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
	},
	{
		license: "Boost Software License 1.0",
		src: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
	}
];
const licenseArray = [];
licenseBank.forEach((licenseEl) => {
	licenseArray.push(licenseEl.license);
});

// // function to write README file
const writeToFile = (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent, (err) =>
		err ? console.log(err) : console.log("Success!")
	);
};

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

// function that generates the README based on the inquirer response data
const generateREADME = (data, licenses) =>
	`# ${data.pageTitle}

${licenses}

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

## Contributing

## Tests

## Questions
`;

inquirer
	.prompt([
		{
			type: "input",
			message: "What is your project title?",
			name: "pageTitle"
		},
		{
			type: "input",
			message: "What description would you like to provide for your product?",
			name: "description"
		},
		{
			type: "input",
			message: "What are your installation instructions?",
			name: "installation"
		},
		{
			type: "checkbox",
			message: "What licenses do you have?",
			name: "licenses",
			choices: licenseArray
		}
		// {
		// 	type: "list",
		// 	message: "What is your preferred method of communication?",
		// 	name: "contact",
		// 	choices: ["email", "phone", "telekinesis"]
		// }
	])
	.then((data) => {
		// --- Licenses Code ---
		// Creating empty array to push license srcs into
		const chosenLicensesSrcArray = [];

		// Extracting array of chosen licenses and operating on each array element
		data.licenses.forEach((licenseEl) => {
			// Cycling through the licenseBank to find matches with user selections
			licenseBank.forEach((item) => {
				// Finding the matches in the licenseBank for the data license choices
				if (licenseEl.includes(item.license)) {
					// For each match, push the src of the license (using the licenseBank) to the chosenLicensesSrcArray
					chosenLicensesSrcArray.push(item.src);
				}
			});
		});
		// Assign the converted string to licenses which will be fed into the generateREADME ftn
		licenses = chosenLicensesSrcArray.join(" ");

		// Define the params for the writeToFile ftn
		const fileName = "sample-README.md";
		const fileContent = generateREADME(data, licenses);

		// Call the writeToFile ftn
		writeToFile(fileName, fileContent);
	});
