
import RegPage from '../1-getting-started/PageObjects/RegPage'


describe('POM form 1', () => {

    it('Reg Page', () => {
        const Rp=new RegPage
        Rp.visit()
        Rp.fillfirstName('Shanmuga')
        Rp.filllastname('priya')
        Rp.fillusername('Shanmugapriya')
        Rp.fillpassword('password123')
        Rp.register()
        cy.title().should('be.equal','Selenium Practice - Register')
        
       
       

    })

})
