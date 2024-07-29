class RecruitmentPage {
    
    
    addCandidatesButton(){
    
        cy.get('.orangehrm-header-container > .oxd-button').contains(' Add ').click();
    
    }

    firstNameFill(username) {

        cy.get('input[name="firstName"]').type(username);

      }


    middleNameFill(middleName) {

        cy.get('input[name="middleName"]').type(middleName);

      }


    lastNameFill(lastName) {

        cy.get('input[name="lastName"]').type(lastName);

      }


    vacancySelect() {

        cy.get('.oxd-select-text-input').click();
    
        // Encontre a opção pelo texto e clique nela
        cy.contains('.oxd-select-dropdown .oxd-select-option', 'Payroll Administrator').click();
      
    }

    emailFill(email){

        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(email);


    }

    contactNumberFill(phone){

        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(phone);


    }

    noteFill(notef){

        cy.get('.oxd-textarea').type(notef);

    }

    consentCheckbox(){

        return cy.get('.oxd-checkbox-input > .oxd-icon').click();

    }


    saveButton(){

        return cy.get('.oxd-button--secondary').click();


    }

    cancelButton(){

        return cy.get('.oxd-button--ghost');


    }

    validateSuccessfulCandidateCreationMessage(){

        return cy.contains('Application Stage');

    }

    searchNewCandidates(candidates){

        cy.get('.oxd-autocomplete-text-input > input').should('be.visible').type(candidates);

        cy.get('.oxd-autocomplete-dropdown')
        .contains(candidates, { timeout: 3000 })
        .click();
    }

    searchButton(){

        cy.get('.oxd-form-actions > .oxd-button--secondary').click();

    }


    resetButton(){

        cy.get('.oxd-button--ghost').click();

    }


    viewButton(){

        cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();

    }

    editButton(){

        cy.get('.oxd-switch-input').click();

    }

    editNameFill(edname) {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type(edname);
      }

    saveEditButton(){

        cy.get('.oxd-form-actions > .oxd-button').click();

    }











      
    }
    
    module.exports = new RecruitmentPage();
    