///<refernce types="Cypress"/>
describe('The flight tab test will verify the flights functionality', () => {

    const flights_tab = '[data-cy="Flight"]'
    //const origin_placeholder = '[placeholder="City or airport"][name="origin"]';
    const origin_placeholder = '[name="origin"]';
    const destination_placeholder = '[name="destination"]'
    const checkin='#input-start-2';
    const checkout='#input-end-2';

    before(() => {
        cy.visit('http://localhost:5500')
    })

    beforeEach(() => {
        cy.get(flights_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })

    //it('navigate to the flights tab', () => {
    //cy.visit('http://localhost:5500')
    // cy.url ().should('eq','http://localhost:5500/' )
    //})

    it('navigate to the flights tab', () => {
        cy.get(origin_placeholder).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', 'flight')
    })
    it('populates origin and destination', () => {
        cy.get(origin_placeholder).type("Paris").invoke("val").should('eq', 'Paris')
        cy.get(destination_placeholder).type("London").invoke("val").should('eq', 'London')

        //cy.get(origin_placeholder).invoke("val").should('eq', 'Paris')
       // cy.get(destination_placeholder).invoke("val").should('eq', 'London')
    })
    it('populates check-in and check-out dates', () => {
     cy.get(checkin).type("10/10/2025").invoke('val').should('eq', "10/10/2025");
     cy.get(checkout).clear();
     cy.get(checkout).type("10/10/2026").invoke('val').should('eq', "10/10/2026");
    })
    it('check radio buttons', () => {
        cy.get('[id="business"]').click().should('be.checked')
        cy.get('[id="economy"]').click().should('be.checked')
        cy.get('[id="f_class"]').click().should('be.checked')
       })
})
