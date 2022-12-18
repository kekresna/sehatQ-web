import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import page_login from "../page_objects/loginPage"
const page = new page_login()

Given("User go to Login Page", () => {
    cy.visit("https://account.sehatq.com/login")
})

When("User go to Lupa Password Page", () => {
    page.goToLupaPasswordPage()
})

When("User click on Manfaat Login", () => {
    page.clickManfaatLogin()
})

When("User click on Corporate Member", () => {
    page.goToCorporateLogin()
})

When("User click on Daftar on Login Page", () => {
    page.goToRegisterPage()
})

When("User login with valid credentials", () => {
    page.loginWithValidCredentials()
})

When("User click on Login", () => {
    page.clickLogin()
})

When("User input email on Login Page", () => {
    page.inputValidEmail()
})

When("User input password on Login Page", () => {
    page.inputValidPassword()
})

When("User input incorrect password on Login Page", () => {
    page.inputWrongPassword()
})

Then("All elements in Login Page should be visible and exists", () => {
    page.verifyLoginPage()
})

Then("All elements in Lupa Password Page should be visible and exists", () => {
    page.verifyLupaPasswordPage()
})

Then("All elements in Corporate Login Page should be visible and exists", () => {
    page.verifyCorporateLoginPage()
})

Then("Manfaat Login Popup is visible", () => {
    page.verifyManfaatLoginPopup()
})

Then("Login Empty Credentials Error is visible", () => {
    page.verifyEmptyCredentialsError()
})

Then("Login Empty Email Error is visible", () => {
    page.verifyEmptyEmailError()
})

Then("Login Empty Pasword Error is visible", () => {
    page.verifyEmptyPasswordError()
})

Then("Login Incorrect Pasword Error is visible", () => {
    page
})

Then("User successfully logged in", () => {

})