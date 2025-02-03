import loginPage from "../support/Amazonpagesweek6day3/loginPage";
import homePage from "../support/Amazonpagesweek6day3/homePage";

import amazonCredentials from "../fixtures/amazonCredentials.json";
import 'cypress-xpath';
describe('amazon webpage', ()=>{
    it('amazon automation', ()=>{
        cy.viewport(1700, 1000);
        loginPage.launchPage(amazonCredentials.amazonurl);
        loginPage.signIn(amazonCredentials.username, amazonCredentials.password);
        homePage.searchProduct(amazonCredentials.AC);
        homePage.selectBrand();
        homePage.addCart();
    })
})

