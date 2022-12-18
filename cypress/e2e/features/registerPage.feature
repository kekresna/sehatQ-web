Feature: Register Page
    Scenario: Verify Register Page
        Given User go to Register Page
        Then All elements in Register Page should be visible and exists

    Scenario: Verify Kebijakan Privasi Page
        Given User go to Register Page
        And User go to Kebijakan Privasi Page
        Then All elements in Kebijakan Privasi Page should be visible and exists

    Scenario: Verify Login Page from Register Page
        Given User go to Register Page
        And User go to Login Page from Register Page
        Then All elements in Login Page should be visible and exists

    Scenario: Verify User Register with Empty Credentials
        Given User go to Register Page
        And User check on TnC box
        And User click on Daftar
        Then Register Empty Credentials Error Message is visible

    Scenario: Verify User Register with Empty Name
        Given User go to Register Page
        And User input password
        And User input email
        And User check on TnC box
        And User click on Daftar
        Then Register Empty Name Error Message is visible

    Scenario: Verify User Register with Empty Email
        Given User go to Register Page
        And User input password
        And User input email
        And User check on TnC box
        And User click on Daftar
        Then Register Empty Name Error Message is visible

    Scenario: Verify User Register with Empty Password
        Given User go to Register Page
        And User input name
        And User input password
        And User check on TnC box
        And User click on Daftar
        Then Register Empty Email Error Message is visible

    Scenario: Verify User Register with Password < 6 characters
        Given User go to Register Page
        And User input name
        And User input email
        And User input password with less characters
        And User check on TnC box
        And User click on Daftar
        Then Register Incorrect Password Length Error Message is visible