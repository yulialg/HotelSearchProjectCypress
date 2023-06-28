//const { after } = require("lodash")

///<refernce types="Cypress"/>
describe('the sanity test suite for travel site', () => {

  before(() => {
    cy.visit('http://localhost:5500')
  })

  beforeEach(() => {
    cy.get('[data-cy="Flight"]').click()
  })

  after(() => {
    cy.log("after all")
  })

  afterEach(() => {
    cy.log("after each")
  })


  it('navigate to the main page', () => {
    cy.visit('http://localhost:5500')
    cy.url().should('eq', 'http://localhost:5500/')
  })

  it('navigate to the main page', () => {
    cy.visit('http://localhost:5500')
    cy.get('[data-cy="Hotels"]').should("be.visible")
  })

  it('navigate to the main page', () => {
    cy.visit('http://localhost:5500')
    cy.get('[data-cy="Car"]').should("be.visible")
  })
  it('navigate to the main page', () => {
    cy.visit('http://localhost:5500')
    cy.get('[data-cy="Flight"]').should("be.visible")
  })
  it('verify elements of hotel tab', () => {
    cy.visit('http://localhost:5500')
    cy.get('.checkbox-row > .m-r-45').should("be.visible")
    cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
    cy.get('#tab1 > form > .btn-submit').should("be.visible")
  })
  it('verify text of tabs of the page', () => {
    cy.visit('http://localhost:5500')
    cy.get('[data-cy="Hotels"]').should("have.text", "hotels")
    cy.get('[data-cy="Car"]').should("have.text", "car")
    cy.get('[data-cy= "Flight"]').should("have.text", "flight")
  })
  it('verify elements of hotel tab', () => {
    cy.visit('http://localhost:5500')
    cy.get('.checkbox-row > .m-r-45').should("be.visible")
    cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
    //cy.get('#tab1 > form > .btn-submit'). should("be.visible")
    //cy.contains('search').should("be.visible")
    cy.get('[type="submit"]').should("be.visible")
  })

})