var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = ExpectedConditions;
const methods = function () {
    const timeout = 10000;
    this.get = async function (url) {
        // await browser.ignoreSynchronisation = true;
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        return await browser.get(url);
    }
    this.close = async function () {
        await browser.quit();
    }

    this.gettitle = async function() {
        return await browser.getTitle();
    }

    this.sendkeys = async function (locator, string) {
        await browser.waitForAngularEnabled(false);
        // await browser.wait(browser.findElement(By.xpath(locator)), timeout);
        // browser.findElement(By.xpath(locator)).sendKeys(string);
        await element(By.xpath(locator)).sendKeys(string);
    }

    this.click = async function (locator) {
        await browser.wait(browser.findElement(By.xpath(locator)), timeout).then(function () {
            browser.findElement(By.xpath(locator)).click();
        })
    }

    this.gettext = async function (locator) {
        await browser.wait(browser.findElement(By.xpath(locator)), timeout,'Could not locate the child element within the time specified');
        return await browser.findElement(By.xpath(locator)).getText();
    }

    this.AssertEqual = async function (actual,expected) {
        return await expect(actual).to.eventually.equal(expected);
    }

    this.sleep = async function (number) {
        return await browser.sleep(number);
    }

    this.waitElement = async function (locator) {
        return await browser.wait(element(By.xpath(locator)),timeout, 'Could not locate the child element within the time specified');
    }
    this.pritnConsoleLog = async function (locator) {
        const element = await browser.wait(browser.findElement(By.xpath(locator)), timeout, 'Could not locate the child element within the time specified');
        element.getText().then(function (text) {
            return console.log(text);
        })
    }
    this.verifyEnable = async function (locator) {
        const element = await browser.wait(browser.findElement(By.xpath(locator)), timeout, 'Could not locate the child element within the time specified');
        return expect(element.isEnabled()).to.eventually.equal(true);
    }
    this.verifyDisable = async function (locator) {
        const element = await browser.wait(browser.findElement(By.xpath(locator)), timeout, 'Could not locate the child element within the time specified');
        return expect(element.isEnabled()).to.eventually.equal(false);
    }
    this.verifyDisplay = async function (locator) {
        await browser.wait(browser.findElement(By.xpath(locator)), timeout, 'Could not locate the child element within the time specified');
        return expect(browser.findElement(By.xpath(locator)).isDisplayed()).to.eventually.equal(true);
    }
    this.waitPageLoad = async function () {
        await browser.waitForAngular();
    }
    this. getCurrentTime = function () {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        return time;
    }
}
module.exports = methods;