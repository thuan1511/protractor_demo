"use strict";
const {Given, When, Then} = require('cucumber');
const homepage = require('../Pages/homePage');
const  Action = require('../supports/commons');

// const Faker = require('faker');
const home = new homepage();

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(70 * 1000);

Given('I am on the kintai staff page',async function () {
    await home.getURL();
});
When('login with username and password', async function () {
    await home.login();
});

Then('verify login successful',async function () {
    await home.verifyLogo();
});
Given('verify header of page', async function () {
    await home.verifyHeader();
});
When('verify time and shop', async function () {
    await home.verifyDisplayTimeAndShop();
});
Then('verify button checkin checkout', async function () {
    // Write code here that turns the phrase above into concrete actions
    await home.verifyButtonCheckinCheckout();
});
Then('Verify the menu on the right of the page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await home.verifyDisplayRightOfThePage();
});

Given('verify when checkin', async function () {
    // Write code here that turns the phrase above into concrete actions
    await home.verifyCheckin();
});

When('verify when checkout', async function () {
    // Write code here that turns the phrase above into concrete actions
    await home.verifyCheckout();
});
Then('verify when click on timecard staff', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


