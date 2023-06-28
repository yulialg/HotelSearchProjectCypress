///<refernce types="Cypress"/>
describe('The car tab test will verify the car rent functionality', () =>{

    const car_tab = '[data-cy="Car"]'
    const location_input = '[name=location]'
    const drop_off_input= '[name=dropoff]'
    const car_group_list= '[name="car-group"]'
    const driver_age_list = '[name="driver-age"]'
    

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
    it('chooses location', () => {
        cy.get('[name=location]').type('Toronto').should('have.value', 'Toronto')
    })
    it('chooses dropoff date', () => {
        cy.get('[name=dropoff]').clear();
        cy.get('[name=dropoff]').type('06/06/24').should('have.value', '06/06/24')
    })
    it('chooses car group list', () => {
        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 1',{force: true})
        cy.get('[title="Group 1"]').should('be.visible')

        cy.get(car_group_list).select('Group 2',{force: true})
        cy.get('[title="Group 2"]').should('be.visible')

        cy.get(car_group_list).select('Group 3',{force: true})
        cy.get('[title="Group 3"]').should('be.visible')
    })
    it('chooses driver age list', () => {
        cy.get(driver_age_list).should('be.visible')
        cy.get(driver_age_list).select('23',{force: true}).should('have.value', '23')
        

        cy.get(driver_age_list).select('24',{force: true}).should('have.value', '24')
        

        cy.get(driver_age_list).select('25',{force: true}).should('have.value', '25')
        

        cy.get(driver_age_list).select('26',{force: true}).should('have.value', '26')
        

})
})

    
