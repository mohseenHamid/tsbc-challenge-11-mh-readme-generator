# Module 11 Challenge: Professional README Generator

## Description

Create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer)

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

- Create a command-line application that accepts user input
- When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
  - Project title
    - When a user enters the project title then it is displayed as the title of the README
  - Sections entitled:
    - Description
    - Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Questions
  - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
  - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
  - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
  - When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README
- The app uses the [Inquirer package](https://www.npmjs.com/package/inquirer)

## Usage

The application will be invoked by using the following command in the terminal:

```
node index.js
```

Instructions on how to use the app will be presented via a welcome message when the app is run

## Mock-Up

### Demo Video

- Please find a demo video for the app [here](../assets/sample-README-demo.mp4) (located in the assets folder)

### Demo GIF

![Animation going through each step of the app](../assets/sample-README-demo.gif)

## License

Please refer to the LICENSE in the repo.
