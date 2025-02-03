import loginPage from '../support/saucedemoPOM/loginPage.js';
import selectProduct from '../support/saucedemoPOM/selectProduct.js';
import saucedemoCredentials from '../fixtures/saucedemoCredentials.json';
import 'cypress-xpath';

describe('saucedemo webpage', ()=>{
    it('saucedemo automation', ()=>{
       loginPage.visit(saucedemoCredentials.saucedemourl);
       loginPage.login(saucedemoCredentials.username,saucedemoCredentials.password);
       selectProduct.selectProduct(saucedemoCredentials.firstname, saucedemoCredentials.lastname,saucedemoCredentials.postalcode);
    })
})
