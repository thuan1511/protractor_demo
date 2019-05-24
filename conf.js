
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl:'http://demo.guru99.com/v4/',
    getPageTimeout: 80000,
    allScriptsTimeout: 600000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['src/features/*.feature'],
    capabilities: {
        browserName:'chrome',
        args: ['no-sandbox']
    },
    cucumberOpts: {
        require: [
            'src/step_definitions/*.js',
            'src/supports/hook.js',
            'src/supports/env.js'
        ],
        format: 'json:./reports/myReport.json',
        tags: [],
        'dry-run': false
    },

    onCleanUp: function () {
        var reporter = require('cucumber-html-reporter');
        var options = {
            reportTitle: 'Test Execution Report',
            theme: 'bootstrap',
            jsonFile: './reports/myReport.json',
            output: './reports/cucumber_report.html',
            screenshotsDirectory: 'screenshots/',
            screenshotsOnlyOnFailure: true
        };
        reporter.generate(options);
    }
};
