///<refernce types="Cypress"/>
describe('Hotel tabs search assign', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:5500')
      cy.url ().should('eq','http://localhost:5500/' )
    })
    it('verify elements of hotel tab', () => {
        cy.visit('http://localhost:5500')
        cy.get('#tab1 > form > :nth-child(1) > .input--style-1'). should("be.visible")
        cy.get('#input-start'). should("be.visible")
        cy.get('#input-end'). should("be.visible")
      })
      it('verify elements of hotel tab', () => {
        cy.visit('http://localhost:5500')
        cy.contains('travellers').should("be.visible")
      })
      it('verify elements of hotel tab', () => {
        cy.visit('http://localhost:5500')
        cy.get('[type="submit"]').should("be.visible")
      })
      it('verify elements of hotel tab', () => {
        cy.visit('http://localhost:5500')
        cy.get('.checkbox-row > .m-r-45'). should("be.visible")
        cy.get('.checkbox-row > :nth-child(2)'). should("be.visible")
      })
})
