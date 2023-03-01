const { licenseArray } = require("./licenseCode");

// array of questions for user
const questions = [
	{
		type: "confirm",
		message: "Are you ready to begin?",
		name: "startConfirmation"
	},
	{
		type: "input",
		message: "Please enter your email address:",
		name: "emailAddress"
		// validate: isValidEmail
	},
	{
		type: "input",
		message: "Please enter your GitHub username:",
		name: "userName"
		// validate: isValidUserName
	},
	{
		type: "input",
		message: "What is your project title?",
		name: "pageTitle",
		default: "Placeholder"
	},
	// {
	// 	type: "input",
	// 	message: "Please provide your User Story:",
	// 	name: "userStory"
	// },
	{
		type: "expand",
		message: "What description would you like to provide for your application?",
		name: "description"
	},
	{
		type: "expand",
		message: "What are your installation instructions?",
		name: "installation"
	},
	{
		type: "input",
		message: "Please provide instructions on how to correctly use your app:",
		name: "usageInstructions"
	},
	{
		type: "confirm",
		message: "Do you provide tests for this application?",
		name: "hasTests"
	},
	{
		type: "input",
		message: "How to run the tests? ",
		name: "tests",
		when(answers) {
			return answers.hasTests;
		}
	},
	{
		type: "input",
		message: "How can other developers contribute to the project? ",
		name: "contributing"
	},
	{
		type: "list",
		message: "What license do you have?",
		name: "license",
		choices: licenseArray
	}
];

module.exports = { questions };
