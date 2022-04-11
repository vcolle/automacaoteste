let chai = require("chai")
exports.config = {
    runner: 'local',
    port: 4723,
    host:'localhost',
    path:'/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts:{
        ui:'bdd',
        require:['@babel/register'],
    timeout:600000    
    },
    featureFlags: {
        specFiltering: true
    },
    maxInstances:1,
    sync: true,
    specs:[
        // './PlayWithMoca.js'
        // './api/click.js'
        // './api/addValue.js'
        // './api/addValue.js'
        // './api/switch.js'
        // './api/getText.js'
        // './api/waitForDisplayed.js'
        // './api/saveScreenShot.js'
        // './api/swiprVertical.js'
        // './api/swiperHorizontal.js'
        './src/test_scripts/account/TC_001_Login_PageObject_01.js'
        ],
    capabilities:[
        {
            "automationName": "UiAutomator2",
            "platformName": "Android",
            "deviceName": "TestDevice",
            "udid": "emulator-5554",
            "appPackage":"com.wdiodemoapp",
             "appActivity": ".MainActivity"
        
        }
    
    ],
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if(error){
            browser.takeScreenshot()
        }
    }

}