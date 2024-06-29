export class errorPage{

    valStHome(){
        cy.get('.signup-form').contains('New User Signup!')
    }
    valAlreadyExist(){
        cy.get('input[name="form_type"]').invoke('val').should('eq', 'signup');  
        cy.get('p[style="color: red;"]').invoke('text').should('eq', 'Email Address already exist!');
    }
    valEnterAccountInformation(){
        //Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.contains('[class="title text-center"]', 'Enter Account Information').should('be.visible');
    }
}

export const validateError = new errorPage()