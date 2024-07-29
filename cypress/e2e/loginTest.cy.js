describe('Test for logins', () => {

  
  it('Validate whether the login will be successful after filling in the data correctly', () => {

    cy.login(); 

  });  


  it('Validate whether the "Required" message is displayed after leaving the fields blank', () => {

    cy.loginWithBlankFields(); 

  });  


  it('Validate whether the "Required" message is displayed after leaving the "Username" field blank', () => {

    cy.loginWithBlankPassword(); 

  });  

  it('Validate whether the "Required" message is displayed after leaving the "Password" field blank', () => {

    cy.loginWithBlankPassword(); 

  });  

  it('Validate error message when typing incorrect "Username" but correct "Password"', () => {

    cy.loginWithCorrectPassword(); 

  });  

  it('Validate error message when typing incorrect "Password" but correct "Username"', () => {

    cy.loginWithCorrectUsername(); 

  });  
  
  

});