export default class loginPage{
    image_login = "img[alt='Login in SehatQ']"
    button_manfaatLogin = ".sc-eCImvq.wMkkD"
    input_email = "#email"
    input_password = "input[placeholder=' '][name='password']"
    button_login = "button[type='submit']"
    link_register = ".sc-dkPtyc.hjXmuM"
    link_corp_login = ".sc-dkPtyc.sc-hKwCoD.jFIXzs.iGDDu"

    verifyLoginPage(){
        expect(cy.url().should("include", "login"))
        cy.get(this.image_login).should("exist")
        cy.get(this.input_email).should("exist")
        cy.get(this.input_password).should("exist")
        cy.get(this.button_login).should("exist")
        cy.get(this.link_register).should("exist")
        cy.get(this.link_corp_login).should("exist")
    }
    
    verifyLupaPasswordPage(){
        expect(cy.url().should("include", "forget-password"))
    }

    verifyManfaatLoginPopup(){
        cy.contains("Nikmati fitur kesehatan terlengkap untuk seluruh anggota keluarga.")
    }

    verifyCorporateLoginPage(){
        expect(cy.url().should("include", "corporate"))
    }

    verifyEmptyCredentialsError(){
        cy.contains("Alamat Email wajib diisi")
        cy.contains("Password wajib diisi")
    }

    verifyEmptyEmailError(){
        cy.contains("Alamat Email wajib diisi")
    }

    verifyEmptyPasswordError(){
        cy.contains("Password wajib diisi")
    }

    verifyIncorrectPasswordError(){
        cy.contains("Email atau Password yang Anda masukkan salah")
    }

    goToLupaPasswordPage(){
        cy.contains("Lupa Password?").click()
    }

    clickManfaatLogin(){
        cy.get(this.button_manfaatLogin).click()
    }

    clickLogin(){
        cy.get(this.button_login).click()
    }

    goToRegisterPage(){
        cy.get(this.link_register).click()
    }

    goToCorporateLogin(){
        cy.get(this.link_corp_login).click()
    }

    loginWithValidCredentials(){
        cy.get(this.input_email).click({force:true}).type("alvinkresna@gmail.com")
        cy.get(this.input_password).click({force:true}).type("testsehatq")
        cy.get(this.button_login).click()
        cy.wait(7000)
    }

    inputValidEmail(){
        cy.get(this.input_email).click({force:true}).type("alvinkresna@gmail.com")
    }

    inputValidPassword(){
        cy.get(this.input_password).click({force:true}).type("testsehatq")
    }

    inputWrongPassword(){
        cy.get(this.input_password).click({force:true}).type("testttttttt")
    }
}