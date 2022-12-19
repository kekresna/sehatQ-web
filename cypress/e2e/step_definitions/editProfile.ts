import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import page_edit_profile from "../page_objects/editProfilePage"
const page = new page_edit_profile()

When("User go to Profile Page", () => {
    page.goToProfile()
})

When("User go to Edit Profile Page", () => {
    page.goToEditProfile()
})

When("User click simpan", () => {
    page.clickSimpan()
})

When("User clear name field", () => {
    page.clearField("name")
})

When("User clear tinggi badan field", () => {
    page.clearField("tinggi badan")
})

When("User clear berat badan field", () => {
    page.clearField("berat badan")
})

When("User clear alamat field", () => {
    page.clearField("alamat")    
})

When("User clear nomor telepon field", () => {
    page.clearField("nomor telepon")
})

Then("All elements in Edit Profile Page should be visible and exists", () => {
    page.verifyEditProfilePage()
})

Then("empty name error message is visible", () => {
    page.verifyEmptyNameErrorMessage()
})

Then("empty tinggi badan error message is visible", () => {
    page.verifyEmptyHeightErrorMessage()
})

Then("empty berat badan error message is visible", () => {
    page.verifyEmptyWeightErrorMessage()
})

Then("empty alamat error message is visible", () => {
    page.verifyEmptyAddressErrorMessage()
})

Then("empty nomor telepon error message is visible", () => {
    page.verifyEmptyPhoneNumberErrorMessage()
})