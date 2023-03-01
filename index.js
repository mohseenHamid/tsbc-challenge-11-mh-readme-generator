const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { questions } = require("./utils/questions");
const { licenseChoice } = require("./utils/licenseCode");
const { welcomeMsg, writeToFile } = require("./utils/other");
const { info } = require("console");

// function to initialize program
function init() {
	console.info(welcomeMsg);

	inquirer.prompt(questions).then((data) => {
		// extracting the license badge image to be fed into the generateMarkdown ftn
		const licenseBadge = licenseChoice(data);

		// Define the params for the writeToFile ftn
		const fileName = "sample-README.md";
		const fileContent = generateMarkdown(data, licenseBadge);

		// Call the writeToFile ftn
		writeToFile(fileName, fileContent);
	});
}

// function call to initialize program
init();
