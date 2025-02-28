
describe('DesiCrew Automation', () => {
    beforeEach(() => {
        cy.visit('https://desicrew.in/', { timeout: 60000 });
        cy.wait(6000)
    });

    it('Should check the page title and url', () => {
        cy.title().should('include', 'DesiCrew');
        cy.get("img[alt='DesiCrew Logo']").should('be.visible');
        cy.url().should('eq', 'https://desicrew.in/');
    });

    it('Should be responsive on mobile', () => {
        cy.viewport('samsung-note9');
        cy.get("img[alt='DesiCrew Logo']").should('be.visible');
        cy.title().should('eq', 'DesiCrew Website');
    });

    it('Should navigate to the About Us section', () => {
        cy.get("a[href='../about-us/about-us.html']").click();
        cy.url().should('include', '/about-us');
        //cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.wait(2000)
        cy.scrollTo('bottom');
        
    });

    it('should retrieve office details from the contact us page', () => {
        cy.get("a[type='submit']").click({ force: true });
        
        cy.get('.row.row-cols-1.row-cols-lg-2.align-items-stretch.g-5.py-5').then((offices) => {
          offices.each((index, office) => {
            const officeText = Cypress.$(office).text();
            cy.log(`Office ${index + 1}: ${officeText}`);
          });
        });
    });

    it('Should navigate to the Resources page', () => {
        cy.get("a[href='../customer-case-studies/customer-case-studies.html']").click();
        cy.url().should('include', '/customer-case-studies');
    });

    it('Should navigate to the Other services page', () => {
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").trigger('mouseover').click();
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
        cy.url().should('include', '/professional-services-and-consulting');
    });

    it('Should navigate to the managed security page', () => {
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").trigger('mouseover').click();
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
        cy.url().should('include', '/managed-AI-based-security-service');
    });

    it('Should navigate to the managed IT page', () => {
        cy.get("#accountDropdown").trigger('mouseover').click();
        cy.get('#accountDropdown').click();
        cy.url().should('include', '/network-and-system-monitoring');
    });
   
    it('Should navigate to the  page', () => {
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").trigger('mouseover').click();
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
        cy.url().should('include', '/managed-AI-based-security-service');
    });

    it('should retrieve office details from the contact us page', () => {
        cy.get('.quick-link-list').then((links) => {
          links.each((index, link) => {
            const linkText = Cypress.$(link).text();
            cy.log(`Office ${index + 1}: ${linkText}`); 
          });
        });
    });
});
