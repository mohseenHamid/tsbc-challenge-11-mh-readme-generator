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
		name: "emailAddress",
		default: "Please enter a valid email address"
		// validate: emailValidation
	},
	{
		type: "input",
		message: "Please enter your GitHub username:",
		name: "userName",
		default: "Please enter a valid username"
		// validate: userNameValidation
	},
	{
		type: "input",
		message: "What is your project title?",
		name: "pageTitle",
		default: "SAMPLE PROJECT"
	},
	// {
	// 	type: "input",
	// 	message: "Please provide your User Story:",
	// 	name: "userStory"
	// },
	{
		type: "input",
		message: "What description would you like to provide for your application?",
		name: "description"
	},
	{
		type: "input",
		message: "What are your installation instructions?",
		name: "installation"
	},
	{
		type: "input",
		message: "Please provide instructions on how to correctly use your app:",
		name: "usageInstructions"
	},
	{
		type: "input",
		message: "Please provide test instructions for your app:",
		name: "testInstructions"
	},
	{
		type: "input",
		message:
			"Please provide guidelines for those in the community who'd like to contribute to your app development:",
		name: "contributionGuidelines"
	},
	{
		type: "list",
		message: "What license do you have?",
		name: "license",
		choices: licenseArray
	}
];

module.exports = { questions };
