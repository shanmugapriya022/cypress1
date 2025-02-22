import 'cypress-xpath';
describe('para bank', ()=>{
    it('register user', ()=>{
        cy.visit("http://parabank.parasoft.com/parabank/admin.htm");
        // cy.xpath("(//a[normalize-space()='Register'])[1]").click();
        cy.get('#loginPanel > :nth-child(3) > a').click();
         cy.wait(1000);
        cy.xpath("(//input[@id='customer.firstName'])[1]").type('shanmuga');
        cy.xpath("(//input[@id='customer.lastName'])[1]").type('priya');
        cy.xpath("(//input[@id='customer.address.street'])[1]").type('test address');
        cy.xpath("(//input[@id='customer.address.city'])[1]").type('erode');
        cy.xpath("(//input[@id='customer.address.state'])[1]").type('tamil nadu');
        cy.xpath("(//input[@id='customer.address.zipCode'])[1]").type('603110');
        cy.xpath("(//input[@id='customer.phoneNumber'])[1]").type('8489730393');
        cy.xpath("(//input[@id='customer.ssn'])[1]").type('638004');
        cy.xpath("(//input[@id='customer.username'])[1]").type('shanmugapriya@qaoncloud.com');
        cy.xpath("(//input[@id='customer.password'])[1]").type('123456');
        cy.xpath("(//input[@id='repeatedPassword'])[1]").type('123456');
        cy.xpath("(//input[@value='Register'])[1]").click();
    })
    it('Login', ()=>{
        cy.visit("http://parabank.parasoft.com/parabank/admin.htm");
    cy.xpath("(//input[@name='username'])[1]").type('shanmugapriya@qaoncloud.com');
    cy.xpath("(//input[@name='password'])[1]").type('123456');
    cy.xpath("(//input[@value='Log In'])[1]").click();
})
it('forget', ()=>{
    cy.visit("http://parabank.parasoft.com/parabank/admin.htm");
cy.xpath("(//a[normalize-space()='Forgot login info?'])[1]").click();
cy.xpath("(//input[@id='firstName'])[1]").type('shanmuga');
cy.xpath("(//input[@id='lastName'])[1]").type('priya');
cy.xpath("(//input[@id='address.street'])[1]").type('test address');
cy.xpath("(//input[@id='address.city'])[1]").type('erode');
cy.xpath("(//input[@id='address.state'])[1]").type('tamil nadu');
cy.xpath("(//input[@id='address.zipCode'])[1]").type('638004');
cy.xpath("(//input[@id='ssn'])[1]").type('45445');
cy.xpath("(//input[@value='Find My Login Info'])[1]").click();
})

})
