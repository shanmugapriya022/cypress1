
import RegForm2 from '../1-getting-started/PageObjects/RegForm2'

describe('POM form 2', () => {
  it('Reg form', () => {
    const Rf = new RegForm2()

    Rf.visit()
    Rf.fillfirstName('Shanmugapriya')
    Rf.filllastName('Dharmalingam')
    Rf.selectGender('Female')
    Rf.selectHobbies('Reading')
    Rf.selectDepartment('Department of Engineering')
    Rf.fillUsername('Shanmugapriya')
    Rf.fillPassword('password123')
    Rf.fillConfirmPassword('password123')
    Rf.fillEmail('shanmugapriya@example.com')
    Rf.fillMobileNumber('8489730393')
    Rf.submit();

    cy.title().should('be.equal','Bootstrap Template')
  })
})
