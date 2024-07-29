const login = require ('./pages/loginPage');
const rpPage = require('./pages/ResetPassword');
const rcr = require('./pages/recruitmentPage.js');
const dsh = require('./pages/dashboardPage.js');

Cypress.Commands.add('login', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();
  
    // Actions
    login.usernameFill(Cypress.env('user'), { log: false });
    login.passwordFill(Cypress.env('pwd'), { log: false });
    login.loginClick();

    //validate if I'm on the dashboard page
    dsh.getDashboardPageValidate();
    
});



Cypress.Commands.add('loginWithBlankFields', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.loginClick();

    //Validate required message of mandatory fields
    login.getUsernameValidate();
    login.getPasswordValidate();
    
});


Cypress.Commands.add('loginWithBlankPassword', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.usernameFill(Cypress.env('user'), { log: false });
    login.loginClick();

    //Validate required message of mandatory fields
    login.getPasswordValidate();
    
});



Cypress.Commands.add('loginWithBlankPassword', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.passwordFill(Cypress.env('pwd'), { log: false });
    login.loginClick();

    //Validate required message of mandatory fields
    login.getUsernameValidate();
    
});


Cypress.Commands.add('loginWithCorrectPassword', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.usernameFill('ADPTest', { log: false });
    login.passwordFill(Cypress.env('pwd'), { log: false });
    login.loginClick();

    //Validate required message of mandatory fields
    login.getInvalidCredentialsValidate();
    
});


Cypress.Commands.add('loginWithCorrectUsername', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.usernameFill(Cypress.env('user'), { log: false });
    login.passwordFill('ADPTest', { log: false });
    login.loginClick();

    //Validate required message of invalid credentials
    login.getInvalidCredentialsValidate();
    
});


// Reset Password Page Commands

Cypress.Commands.add('resetPasswordCancel', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.forgotPasswordClick();
    rpPage.usernameRPFill('Admin', { log: false });
    rpPage.cancelButton();

    login.getLoginPageValidate();
    
});


Cypress.Commands.add('usernameBlankFill', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.forgotPasswordClick();
    rpPage.resetPasswordButton();

    rpPage.getUsernameRPValidate();
    
});


Cypress.Commands.add('usernameSuccessful', () => {

    // Get the base URL from the configuration file
    const baseUrl = Cypress.config('baseUrl'); 

    cy.clearCookies();
    cy.clearLocalStorage();

    // Access the login URL
    cy.visit(`${baseUrl}`);

    //Validates if the text is present on the page
    login.getLoginPageValidate();

    // Actions
    login.forgotPasswordClick();
    rpPage.usernameRPFill('ADPTest');
    rpPage.resetPasswordButton();

    rpPage.getResetPasswordSuccessful();
    
});


//Dashboard

Cypress.Commands.add('dshrecruitmentMenu', () => {

    dsh.recruitmentMenuClick();
     
 });


// Recuitment

Cypress.Commands.add('createNewCandidates', (fname,mname,lname,emailf,cnumber,nfill) => {

   rcr.addCandidatesButton();
   rcr.firstNameFill(fname);
   rcr.middleNameFill(mname);
   rcr.lastNameFill(lname);  
   rcr.vacancySelect();
   rcr.emailFill(emailf);
   rcr.contactNumberFill(cnumber);
   rcr.noteFill(nfill);
   rcr.consentCheckbox();
   rcr.saveButton();
   rcr.validateSuccessfulCandidateCreationMessage();
 
    
});


Cypress.Commands.add('searchCandidates', (candidate) => {

    rcr.searchNewCandidates(candidate);
    rcr.searchButton();    
  
     
 });


 Cypress.Commands.add('viewCandidates', () => {

    rcr.viewButton(); 
     
 });


 Cypress.Commands.add('editCandidate', (edit) => {
    rcr.editButton();
    rcr.editNameFill(edit); 
    rcr.saveEditButton();
  });
  


