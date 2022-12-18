Feature: Login Page
    Scenario: Verify Login Page
        Given User go to Login Page
        Then All elements in Login Page should be visible and exists

    Scenario: Verify Lupa Password Page
        Given User go to Login Page
        And User go to Lupa Password Page
        Then All elements in Lupa Password Page should be visible and exists

    Scenario: Verify Manfaat Login
        Given User go to Login Page
        And User click on Manfaat Login
        Then Manfaat Login Popup is visible

    Scenario: Verify Register Page from Login Page
        Given User go to Login Page
        And User click on Daftar on Login Page
        Then All elements in Register Page should be visible and exists

    Scenario: Verify Corporate Login Page
        Given User go to Login Page
        And User click on Corporate Member
        Then All elements in Corporate Login Page should be visible and exists

    Scenario: Verify Login with Valid Credentials
        Given User go to Login Page
        And User login with valid credentials
        Then User successfully logged in

    Scenario: Verify Login with Empty Credentials
        Given User go to Login Page
        And User click on Login
        Then Login Empty Credentials Error is visible

    Scenario: Verify Login with Empty Email
        Given User go to Login Page
        And User input password on Login Page
        And User click on Login
        Then Login Empty Email Error is visible

    Scenario: Verify Login with Empty Password
        Given User go to Login Page
        And User input email on Login Page
        And User click on Login
        Then Login Empty Pasword Error is visible

    Scenario: Verify Login with Incorrect Password
        Given User go to Login Page
        And User input email on Login Page
        And User input incorrect password on Login Page
        And User click on Login
        Then Login Incorrect Pasword Error is visible