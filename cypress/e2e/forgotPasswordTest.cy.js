describe('Test for Forgot Password', () => {

  
  it('Validate that the user returns to the login screen when clicking cancel', () => {

    cy.resetPasswordCancel(); 

  });
  
  
  it('Validate message that the field must be filled in when leaving the "Username" field blank', () => {

    cy.usernameBlankFill(); 

  });
  
  
  it('Validate success message when filling in the "Username" field', () => {

    cy.usernameSuccessful(); 

  });


  

});