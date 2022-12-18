export default class registerPage{
    image_register = "img[alt='Login in SehatQ']"
    input_name = "#name"
    input_email = "#email"
    input_password = "input[name='password']"
    checkbox_tnc = "#ok-check"
    button_daftar = "button[type='submit']"
    link_login = ".sc-dkPtyc.hjXmuM"
    link_tnc = "div[class='sc-gSQGeZ cLUJmX'] a:nth-child(1)"

    verifyRegisterpage(){
        expect(cy.url().should("include", "daftar/email"))
        cy.get(this.image_register).should("exist")
        cy.contains("Daftar")
        cy.get(this.input_name).should("exist")
        cy.get(this.input_email).should("exist")
        cy.get(this.input_password).should("exist")
        cy.get(this.checkbox_tnc).should("exist")
        cy.get(this.button_daftar).should("exist")
        cy.get(this.link_login).should("exist")
        cy.get(this.link_tnc).should("exist")
    }

    verifyKebijakanPrivasiPage(){
        expect(cy.url().should("include", "kebijakan-privasi"))
    }

    verifyUserRegisterEmptyCredentials(){
        this.checkOnTnCBox()
        this.clickButtonDaftar()
        cy.contains("Nama Lengkap wajib diisi")
        cy.contains("Email wajib diisi")
        cy.contains("Password wajib diisi")
    }

    verifyErrorEmptyName(){
        cy.contains("Nama Lengkap wajib diisi")
    }

    verifyErrorEmptyEmail(){
        cy.contains("Email wajib diisi")
    }

    verifyErrorEmptyPassword(){
        cy.contains("Password wajib diisi")
    }

    verifyErrorPasswordLength(){
        cy.contains("Password harus diisi minimal 6")
    }

    checkOnTnCBox(){
        cy.get(this.checkbox_tnc).check({force: true})
    }

    clickButtonDaftar(){
        cy.get(this.button_daftar).click()
    }

    goToKebijakanPrivasiPage(){ 
        cy.get(this.link_tnc).should("have.attr", "href")
        .then((href) => {
            cy.visit(`${href}`)
        })
    }

    goToLoginPage(){
        cy.get(this.link_login).click()
        expect(cy.url().should("include", "login"))
    }

    inputValidEmail(){
        cy.get(this.input_email).click({force:true}).type("testsehatq@sehatq.com")
    }

    inputValidName(){
        cy.get(this.input_name).click({force:true}).type("testsehatq")
    }

    inputValidPassword(){
        cy.get(this.input_password).click({force:true}).type("testsehatq")
    }

    inputLessPassword(){
        cy.get(this.input_password).click({force:true}).type("test1")
    }
}