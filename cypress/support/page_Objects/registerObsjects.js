
export class registerTestSuite{
    validateHomepage(){
            cy.fixture('logo.png').then((fileContent) => {
            cy.get('[class="logo pull-left"]').should('be.visible');
            cy.get('div a img').should('have.attr', 'src').and('include', 'logo.png');
          })
    }
    goToRegisterPage(){
            //Click on 'Signup / Login' button
            cy.get('[class="fa fa-lock"]').click()
            //Verify 'New User Signup!' is visible
            cy.get('.signup-form').contains('New User Signup!')
    }
    fillAllFieldRegistered(){
        cy.generateRandomName().then((randomName) => {
            cy.generateRandomEmail().then((randomEmail) => {

            cy.get('[placeholder="Name"]').first().type(randomName)
            .wait(10)
            cy.get('[placeholder="Email Address"]').eq(1).type(randomEmail)
            //Click 'Signup' button
            cy.get('.btn').contains('Signup').click()
            })
        })
    }

    fillDetail1(){
        cy.get('.radio-inline').click({ multiple: true })
        cy.get('#uniform-id_gender2')

        cy.get('#password').type('Pass123')
        cy.get('#uniform-days').find('#days').select('16')
        cy.get('#uniform-months').find('#months').select('May')
        cy.get('#uniform-years').find('#years').select('2000')
    }
    signNewsLatter(){
        cy.get('.checkbox').find('#newsletter').should('have.value','1').then (newsletter => {
            cy.wrap(newsletter).check({force:true})
        })
    }
    signReceiveSpec(){
        cy.get('.checkbox').find('#optin').should('have.value','1').then (newsletter => {
            cy.wrap(newsletter).check({force:true})
        })
    }
    fillDetail2(){
        cy.get('#first_name').type('user')
        cy.get('#last_name').type('pertama4')
        cy.get('#address1').type('jl.123')
        cy.get('#country').select('India')
        cy.get('#state').type('statetest')
        cy.get('#city').type('citytest')
        cy.get('#zipcode').type('123445')
        cy.get('#mobile_number').type('08787878787')
        //Click 'Create Account button'
        cy.get('[class="btn btn-default"]').contains('Create Account').click()

        //Verify that 'ACCOUNT CREATED!' is visible
        cy.get('[class="title text-center"]').contains('Account Created!')
        //Click 'Continue' button
        cy.get('.btn').contains('Continue').click()
    }
    deleteUser(){
        //Click 'Delete Account' button
        cy.get('[class="fa fa-trash-o"]').click()
        //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get('[class="title text-center"]').contains('Account Deleted!')
        cy.get('.btn').contains('Continue').click()
    }
}

export const registerPage = new registerTestSuite()