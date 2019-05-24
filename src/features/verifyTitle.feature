Feature: login and verify screen kintai staff

  Scenario: login page
    Given I am on the kintai staff page
    When  login with username and password
    Then verify login successful


  Scenario: verify UI kintai staff
    Given verify header of page
    When verify time and shop
    Then verify button checkin checkout
    Then Verify the menu on the right of the page


  Scenario: verify function checkin checkout
    Given verify when checkin
    When verify when checkout
    Then verify when click on timecard staff
