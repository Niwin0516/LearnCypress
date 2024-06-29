export class button{
    registButton(){
        cy.get('.btn').contains('Signup').click()
    }
}
export const btn = new button()