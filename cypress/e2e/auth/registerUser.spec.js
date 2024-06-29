import {registerPage} from "../../support/page_Objects/registerObsjects"
import {validateError} from "../../support/page_Objects/errorObjects"
import "../../support/page_Objects/formRegistObjects"
import { btn } from "../../support/page_Objects/buttonObjects"


describe ('Scenario 1 : Registered new User', () =>{

    // Open website
    beforeEach('open project',()=>{
        cy.urlLink()
    })

    it('TC-01 : As Learner I should be able to registered new account',()=> {
        registerPage.validateHomepage()
        registerPage.goToRegisterPage()
        registerPage.fillAllFieldRegistered()
        validateError.valEnterAccountInformation()
        registerPage.fillDetail1()
        registerPage.signNewsLatter()
        registerPage.signReceiveSpec()
        registerPage.fillDetail2()
        registerPage.deleteUser()

    })
    it('TC-02 : As Learner I should not be able to registered new account with empty email',()=> {
        registerPage.validateHomepage()
        registerPage.goToRegisterPage()
  
          const name = 'userkedua1'
          cy.fillForm(name,' ')

        btn.registButton()
        validateError.valStHome()

    })
    it('TC-03 : As Learner I should not be able to registered new account with invalid format email',()=> {
        registerPage.validateHomepage()
        registerPage.goToRegisterPage()

        const name = 'userkedua1'
        const email = 'userkedua1'
        cy.fillForm(name,email)

        btn.registButton()
    
        validateError.valStHome()
    })
    it('TC-04 : As Learner I should not be able to registered new account with same registered account',()=> {
        registerPage.validateHomepage()
        registerPage.goToRegisterPage()

        const name = 'test'
        const email = 'test@gmail.com'
        cy.fillForm(name,email)
        
        btn.registButton()
    
        validateError.valAlreadyExist()
    })
})