import { faker } from '@faker-js/faker';


describe('Recruiter Test', () => {

    beforeEach(() => {
  
      cy.login(); 
  
    });
  
    it('Create new Candidate', () => {

        const candidateData = {
            fname: faker.person.firstName(),
            mname: faker.person.middleName(),
            lname: faker.person.lastName(),
            email: faker.internet.email(),
            fnumber: faker.string.numeric(10),
            randomContent: faker.lorem.paragraph(),

          };
      
          // Save the candidate data to a file using cy.writeFile
          cy.writeFile('cypress/fixtures/candidateData.json', candidateData);
      
          cy.dshrecruitmentMenu();
          cy.createNewCandidates(
            candidateData.fname,
            candidateData.mname,
            candidateData.lname,
            candidateData.email,
            candidateData.fnumber,
            candidateData.randomContent

          );
      
  
    });
  
    it('Edit candidate', () => {
      const editName = faker.person.firstName();
    
      // Save the name as a JSON object
      cy.writeFile('cypress/fixtures/editCandidateData.json', { editName });
    
      // Read the candidate data from the file using cy.readFile
      cy.readFile('cypress/fixtures/candidateData.json').then((candidateData) => {
        cy.dshrecruitmentMenu();
        cy.searchCandidates(candidateData.fname);
        cy.viewCandidates();
    
        // Read the edited name from the JSON and pass it to edit Candidate
        cy.readFile('cypress/fixtures/editCandidateData.json').then((editCandidateData) => {
          const { editName } = editCandidateData; // Extrai o nome editado do JSON
    
          // Edit the candidate with the new name
          cy.editCandidate(editName);
    
          // After editing, get the field value and compare it with the edited name
          cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
            .invoke('val')
            .then((fieldValue) => {
              // Compare the field value with the edited name
              expect(fieldValue).to.equal(editName);
            });
        });
      });
    });

    });