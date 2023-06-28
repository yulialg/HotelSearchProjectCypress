///<refernce types="Cypress"/>
describe('The car tab test will verify the flights functionality', () =>{

    const car_tab = '[data-cy="Car"]'
    //const origin_placeholder = '[placeholder="City or airport"][name="origin"]';
    const location = '[#tab2 > form > :nth-child(1) > .input--style-1"]';
    const dropp_off = '[:nth-child(4) > :nth-child(1) > .input-group > .input--style-1"]';
    

    before(() => {
        cy.visit('http://localhost:5500')
    })

    beforeEach(() => {
        cy.get(car_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })
})