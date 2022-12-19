export default class editProfile{
    button_profile = "img[class='sc-jzJRlG dOVASO']"
    link_profile = ".sc-gZMcBi.sc-kAzzGY.kqazqG.Anchor-NexLink-Function"
    button_edit_profile = ".chakra-link.css-1pwr2bt"
    edit_name = ".fpKDVR > :nth-child(1) > .sc-eHgmQL > .sc-jWBwVP > .sc-gPEVay"
    edit_tinggi_badan = ":nth-child(4) > .sc-eHgmQL > .sc-jWBwVP > .sc-gPEVay"
    edit_berat_badan = ":nth-child(5) > .sc-eHgmQL > .sc-jWBwVP > .sc-gPEVay"
    edit_nomor_telepon = ":nth-child(6) > .sc-eHgmQL > .sc-jWBwVP > .sc-gPEVay"
    edit_alamat = "#address"
    button_simpan = ".sc-bxivhb.giIfj.sc-ifAKCX.kmPYUr"

    verifyEditProfilePage(){
        expect(cy.url().should("include", "profil"))
        cy.contains("Profil Kamu")
    }

    goToProfile(){
        cy.get(this.button_profile).click()
        cy.get(this.link_profile).click()
    }

    goToEditProfile(){
        cy.get(this.button_edit_profile).click()
        cy.wait(5000)
    }

    clickSimpan(){
        cy.get(this.button_simpan).click()
    }

    clearField(fieldName: string){
        switch(fieldName){
            case "name":
                cy.get(this.edit_name).clear()
                break
            case "tinggi badan":
                cy.get(this.edit_tinggi_badan).clear()
                break
            case "berat badan":
                cy.get(this.edit_berat_badan).clear()
                break
            case "alamat":
                cy.get(this.edit_alamat).clear()
                break
            case "nomor telepon":
                cy.get(this.edit_nomor_telepon).clear()
                break
            default:
                cy.log("Not Defined")
        }
    }

    verifyEmptyNameErrorMessage(){
        cy.contains("Nama Lengkap wajib diisi")
    }

    verifyEmptyPhoneNumberErrorMessage(){
        cy.contains("Phone wajib diisi")
    }

    verifyEmptyAddressErrorMessage(){
        cy.contains("Alamat wajib diisi")
    }

    verifyEmptyWeightErrorMessage(){
        cy.contains("Berat Badan wajib diisi")
    }

    verifyEmptyHeightErrorMessage(){
        cy.contains("Tinggi Badan wajib diisi")
    }
}