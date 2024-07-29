# About ADP
ADP is an American provider of human resources management software and services, headquartered in Roseland, New Jersey.

# About the Challenge

## Tasks

### Test Case 1: Login
1. Open the browser
2. Enter the URL [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
3. Fill out username and password credentials, then click Login
4. Validate that you are on the Dashboard page

### Test Case 2: Recruitment - Create Candidate
**Pre-condition:** You’re logged in to the system
1. Click on the Recruitment tab on the left navigation menu
2. Click the Add button to add a new candidate
3. Fill out all required fields
4. Click Save
5. Validate that the user was successfully created

### Test Case 3: Recruitment - Edit Candidate
**Pre-condition:** You’re logged in to the system and there is at least one candidate
1. Click on the Recruitment tab on the left navigation menu
2. Find the candidate you created in Test Case 2
3. Edit that candidate’s profile
4. Click Save
5. Validate that the user profile was successfully updated

Feel free to show any other automation scenarios you find relevant!

## Evaluation Criteria (must have)
- A reviewer should be able to clone this repository (e.g., from Github, Bitbucket)
- A reviewer should be able to open the solution and run the tests
- Use of industry best practices

## Evaluation Bonus (nice to have)
- A reviewer should be able to run the solution in headless mode 
- Use of Page Objects 
- Performance optimization 
- Parallelism 
- Log all errors **warning: When you run cypress in GUI mode, it already displays the logs on the run screen.**
- Export results to reporting tools 
- Use of SOLID principles **Warning: I couldn't develop**
- Report any bugs or issues you find (there shouldn't be any, but who knows) **warning: I couldn't prepare a file for this!**

# Prerequisites
- The [Visual Studio Code](https://code.visualstudio.com/download) was used to develop the code.
- The machine must have [NodeJS](https://nodejs.org/en/download/prebuilt-installer/current) version >= 22.5.1 and NPM >= 10.8.2

# How to Run
- Make [Download](https://github.com/GustavoBrasil/ADPTest/archive/refs/heads/main.zip) or clone the project
- Open your IDE
- Open the project folder inside your IDE
- Open a terminal **(Make sure the terminal path is pointing to the project)**
- To run use the command: ```npm install```
- To run the tests, I created 5 commands, which are:
   - ```"e2e:chrome": "cypress run --browser chrome"``` **Explanation:** This command runs the Cypress end-to-end tests in the Chrome browser. It uses the cypress run command, which runs all tests headlessly by default, but specifies the --browser chrome option to ensure the tests execute in the Chrome browser.
   - ```"cy:run": "cypress run"``` **Explanation:** This command runs the Cypress end-to-end tests using the default browser set in the Cypress configuration. The cypress run command runs all tests headlessly without opening the Cypress GUI.
   - ```"html-report": "cypress run --spec cypress/e2e/* --browser chrome"``` **Explanation:** This command runs the Cypress end-to-end tests specified in the cypress/e2e/ directory using the Chrome browser. The --spec option specifies the directory of the test files to run, and --browser chrome ensures the tests run in Chrome.
   - ```"cy:parallel" : "cypress-parallel -s cy:run -t 2 -d cypress/e2e/*"``` **Explanation:** This command runs the Cypress tests in parallel. It uses the cypress-parallel tool to split the test execution across two threads (-t 2). The -s cy:run specifies the Cypress run command to use, and -d cypress/e2e/* specifies the directory containing the test files.
   - ```"cy:open": "cypress open"``` **Explanation:** This command opens the Cypress Test Runner in interactive mode. The cypress open command launches the Cypress GUI, allowing you to manually select and run tests in a browser of your choice.
- In the terminal, for example, use: ```npm run cy:open```

![image](https://github.com/user-attachments/assets/4bfe6359-9311-4924-95dc-932970e95d8b)

![image](https://github.com/user-attachments/assets/dc0ccfad-ad56-4d2c-9677-4b8249c8dc4e)

![image](https://github.com/user-attachments/assets/62ca7f32-d31c-4bc2-8b7e-e43a43211203)

![image](https://github.com/user-attachments/assets/1408d66f-ecdd-4ba5-a9c3-c63d53257ac2)

![image](https://github.com/user-attachments/assets/1d7bcc73-ab7d-4113-aa9d-54f494fa244f)

![image](https://github.com/user-attachments/assets/a9fccdef-0fb2-4dd6-bc0c-65035e56b047)

![image](https://github.com/user-attachments/assets/d84ddf11-2c3a-46d3-98c9-61734bb8f3ff)

![image](https://github.com/user-attachments/assets/9ba63913-52f4-49b3-b0c8-72e0f2c26bc9)








