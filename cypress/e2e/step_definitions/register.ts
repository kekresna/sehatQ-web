import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import page_register from "../page_objects/registerPage"
const page = new page_register()

Given("User go to Register Page", () => {
    cy.visit("https://account.sehatq.com/daftar/email")
})

When("User go to Kebijakan Privasi Page", () => {
    page.goToKebijakanPrivasiPage()
    page.verifyKebijakanPrivasiPage()
})

When("User go to Login Page from Register Page", () => {
    page.goToLoginPage()
})

When("User check on TnC box", () => {
    page.checkOnTnCBox()
})

When("User click on Daftar", () => {
    page.clickButtonDaftar()
})

When("User input email", () => {
    page.inputValidEmail()
})

When("User input password", () => {
    page.inputValidPassword()
})

When("User input name", () => {
    page.inputValidName()
})

When("User input password with less characters", () => {
    page.inputLessPassword()
})

Then("All elements in Register Page should be visible and exists", () => {
    page.verifyRegisterpage()
})

Then("All elements in Kebijakan Privasi Page should be visible and exists", () => {
    page.verifyKebijakanPrivasiPage()
})

Then("Register Empty Credentials Error Message is visible", () => {
    page.verifyUserRegisterEmptyCredentials()
})

Then("Register Empty Name Error Message is visible", () => {
    page.verifyErrorEmptyName()
})

Then("Register Empty Password Error Message is visible", () => {
    page.verifyErrorEmptyPassword()
})

Then("Register Empty Email Error Message is visible", () => {
    page.verifyErrorEmptyEmail()
})

Then("Register Incorrect Password Length Error Message is visible", () => {
    page.verifyErrorPasswordLength()
})
