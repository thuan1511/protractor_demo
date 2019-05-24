const {Before, After, AfterAll} = require('cucumber');
// var {setDefaultTimeout} = require('cucumber');
// setDefaultTimeout(60 * 1000);

    Before(async function () {
        console.log('!!!!!!!EXECUTING!!!!!!!!');
    })

    After(async function(scenario) {
        if (scenario.result.status === 'failed') {
            var attach = this.attach;
            return browser.takeScreenshot().then(function(png) {
                var decodedImage = new Buffer(png, "base64");
                return attach(decodedImage, "image/png");
            });
        }
    });

    AfterAll(async function () {
        browser.quit();
    })

