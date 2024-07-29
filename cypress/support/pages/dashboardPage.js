class DashboardPage {
    
    
    recruitmentMenuClick(){
    
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').contains('Recruitment').click();
    
    }

    getDashboardPageValidate() {
        return  cy.contains('Dashboard');
      }
      
    }
    
    module.exports = new DashboardPage();
    