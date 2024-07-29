class ResetPasswordPage {
    

usernameRPFill(username) {

    cy.get('.oxd-input').type(username);

  }


resetPasswordButton(){

    cy.get('.oxd-button--secondary').click();

}


cancelButton(){

    cy.get('.oxd-button--ghost').click();

}

getUsernameRPValidate(){

    return cy.get('.oxd-input-group > .oxd-text').contains('Required');


  }

  getResetPasswordSuccessful(){

    return cy.get('.oxd-text--h6').contains('Reset Password link sent successfully')


  }
  
}

module.exports = new ResetPasswordPage();
