class LoginPage {
   
  
    usernameFill(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    passwordFill(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    loginClick() {
      cy.get('button[type="submit"]').click();
    }
  
    forgotPasswordClick() {
      cy.contains("Forgot your password?").click();
    }


    getLoginPageValidate() {
      return  cy.contains('OrangeHRM OS 5.7');
    }
  
   
  
    getUsernameValidate(){
  
      return cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains('Required');
  
    }
  
  
    getPasswordValidate(){
  
      return cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').contains('Required');
  
    }
  
    getInvalidCredentialsValidate(){
  
      return cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials');
  
    }
  
    
  }
  
  module.exports = new LoginPage();
  