"use strict";
const  Action = require('../supports/commons');
const Data = require('../supports/data');

const action = new Action();
const DATA = new Data();
var home = function () {
    this.ele ={
        username: "//*[@id='company_code']",
        email: "//*[@name = 'email']",
        password: "//*[@name='password']",
        Btnlogin: "//*[@id='jbtn-login-staff']",
        Logo: "//div[@class='headerLogo']//img",
        header1: "//div[@class='floatRight']//a[normalize-space()='Top']",
        header2: "//div[@class='floatRight']//a[normalize-space()='Notice']",
        datetime: "//div[@class='group groupTime cf']/p[@class='dateTime']",
        BtnCheckin: "//div[@class='btnText' and normalize-space()='Going to work']/parent::button",
        BtnCheckout: "//div[@class='btnText' and normalize-space()='Leaving work']/parent::button",
        fixTimecard: "//div[@class='requestBlock cf']//a/span[text()='Fix timecards Application']"
    }
    this.getURL = async function () {
        await action.get(DATA.data.URL);
    }

    this.login = async function () {
        // await action.sleep(5000);
        await action.sendkeys(this.ele.username,DATA.data.user);
        await action.sendkeys(this.ele.email, DATA.data.ID);
        await action.sendkeys(this.ele.password, DATA.data.pass);
        await action.click(this.ele.Btnlogin);

    }
    this.quitDriver = async function () {
        await action.close();
    }
    this.verifyLogo = async function () {
        // await action.waitElement(this.ele.Logo);
        await action.sleep(7000);
        await action.waitPageLoad();
        await action.verifyDisplay(this.ele.Logo);
    }
    this.verifyHeader = async function () {
        await action.waitPageLoad();
        await action.waitElement(this.ele.header1);
        await action.verifyDisplay(this.ele.header1);
        await action.waitElement(this.ele.header2);
        await action.verifyDisplay(this.ele.header2);
    }
    
    this.verifyDisplayTimeAndShop = async function () {
        await action.waitElement(this.ele.datetime);
        await action.verifyDisplay(this.ele.datetime);
    }
    this.sleep = async function () {
        browser.sleep(3000);
    }

    this.verifyButtonCheckinCheckout = async function () {
        await action.waitElement(this.ele.BtnCheckin);
        await action.verifyEnable(this.ele.BtnCheckin);
        await action.waitElement(this.ele.BtnCheckout);
        await action.verifyDisable(this.ele.BtnCheckout);
    }
    this.verifyDisplayRightOfThePage = async function () {
        await action.verifyDisplay(this.ele.fixTimecard);
    }

    this.verifyCheckin = async function () {
        await action.waitElement(this.ele.BtnCheckin);
        await action.click(this.ele.BtnCheckin);
        await action.sleep(10000);

    }
    this.verifyCheckout = async function () {
        await action.verifyEnable(this.ele.BtnCheckout);
        await action.sleep(65000);
        await action.click(this.ele.BtnCheckout);
    }
    this.fixtimecardDisplay = async function () {
        var test = "kakakaa";
        await action.verifyDisplay(this.ele.fixTimecard);
        await action.AssertEqual(test, "hehehehehe");
    }
}
module.exports = home;