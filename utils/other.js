const fs = require("fs");

// welcome msg giving instructions
const welcomeMsg = `
--------------------------------------------- Welcome! ----------------------------------------------
This application will generate a README.md for your project based on the answers you provide us!

------------------------------------------- Instructions --------------------------------------------
- For typed inputs, please press the "Enter" key after completion to submit your response and move on
- For multiple line responses, please adhere to the following:
    - Begin your response with a "comma" and "space" as displayed here: ", "
    - Please separate each instruction with a "comma" and "space"
- For multiple choice selections, please follow the instructions that will be provided to you
- To skip a question, please press the "Enter" key without inputting anything else

------------------------------------------ Happy Writing! -------------------------------------------
When you've read the instructions, please enter your first response!
`;
// ------------------------------------------ Happy Writing! -------------------------------------------
// When you've read the instructions, please confirm below that you're ready to begin!

// function to separate multiple line responses
const splitLines = (response) => {
	let responseArray = [...response.split(",")];

	responseFormatted = responseArray.join(`\n-`);

	return responseFormatted;
};

// function to write README file
const writeToFile = (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent, (err) =>
		err
			? console.log(err)
			: console.info(`
-------------------------------------------- Thank You! ---------------------------------------------
Your professional README has been successfully created! I hope you found it to be a smooth process!
`)
	);
};

module.exports = { welcomeMsg, writeToFile, splitLines };
