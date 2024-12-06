describe('Checkbox Radio Button Elements Test', () => {

    it('test1-Verify title', () => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.title().should('equal', 'Checkboxes & Radio Buttons')
    })
    it('test1-Verify title-negative', () => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
           // Check checkbox
        cy.get('body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(17) > form:nth-child(1)')
        cy.get('[value="red"]').check()
        cy.wait(2000)
        cy.get('[value="orange"]').check()
        cy.wait(2000)
        cy.get('[value="purple"]').check()
        cy.wait(5000)
        cy.get(':nth-child(33) > form > :nth-child(7)').should('be.visible').click()
        cy.get('.NextLink > a').click()
        cy.get(':nth-child(24) > .Example > form')
        cy.get(':nth-child(24) > .Example > form > select').select[name='coffee']

    })

})