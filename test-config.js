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
    maxInstances:1,
    sync: true,
    specs:[
        // './PlayWithMoca.js'
        // './api/click.js'
        // './api/addValue.js'
        // './api/addValue.js'
        // './api/switch.js'
        // './api/waitForDisplayed.js'
        './api/saveScreenShot.js'
        // './api/swiprVertical.js'
        // './api/swiperHorizontal.js'
        // './src/test_scripts/account/TC_001_Login_PageObject_01.js'
        ],
    capabilities:[
        {
            "automationName": "UiAutomator2",
            "platformName": "Android",
            "deviceName": "TestDevice",
            "udid": "emulator-5554",
            "appPackage":"com.wdiodemoapp",
             "appActivity": ".MainActivity"
        
        }]
}