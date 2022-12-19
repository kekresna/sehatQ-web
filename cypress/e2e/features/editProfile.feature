Feature: Edit Profile Feature
    Scenario: Verify Edit Profile Page
        Given User go to Login Page
        And User login with valid credentials
        And User go to Profile Page
        Then All elements in Edit Profile Page should be visible and exists
    
    Scenario: Verify Edit Profile Delete Name
        Given User go to Login Page
        And User login with valid credentials
        And User go to Profile Page
        And User go to Edit Profile Page
        And User clear name field
        And User click simpan
        Then empty name error message is visible

    Scenario: Verify Edit Profile Delete Tinggi Badan
        Given User go to Login Page
        And User login with valid credentials
        And User go to Profile Page
        And User go to Edit Profile Page
        And User clear tinggi badan field
        And User click simpan
        Then empty tinggi badan error message is visible

    Scenario: Verify Edit Profile Delete Berat Badan
        Given User go to Login Page
        And User login with valid credentials
        And User go to Profile Page
        And User go to Edit Profile Page
        And User clear berat badan field
        And User click simpan
        Then empty berat badan error message is visible

    Scenario: Verify Edit Profile Delete Alamat
        Given User go to Login Page
        And User login with valid credentials
        And User go to Profile Page
        And User go to Edit Profile Page
        And User clear alamat field
        And User click simpan
        Then empty alamat error message is visible

    Scenario: Verify Edit Profile Delete Nomor Telepon
        Given User go to Login Page
        And User login with valid credentials
        And User go to Profile Page
        And User go to Edit Profile Page
        And User clear nomor telepon field
        And User click simpan
        Then empty nomor telepon error message is visible