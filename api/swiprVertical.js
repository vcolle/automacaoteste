describe('Learning Swipe Vertially', async function () {

    it('should swipr vertially', async function () {

        const FORMS_ICON_HOME_SCREEN = '~Forms'
        const ACTIVE_BUTTON = `~button-Active`
        const FORM_HEADER_TEXT = '//android.widget.ScrollView[@content-desc="Forms-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]'

        // 1. Click on Form icon
        await $(FORMS_ICON_HOME_SCREEN).click()

        // 2. Swipe up vertically

        // const {height} = driver.getWindowSize()
        // const anchorPercentage = 50
        // const startPointPercentage = 90
        // const endPointPercentage = 10

        // const anchor = height * anchorPercentage / 100
        // const startPoint = height * startPointPercentage / 100
        // const endPoint = height * endPointPercentage / 100

        // // Touch on Screen before doing touch action
        // await $(FORM_HEADER_TEXT).click()


        // // Press on start point, wait 1s, moveTo endPoint , release
        // driver.touchPerform([
        //     {
        //         action: 'press',
        //         options: {
        //             x: anchor,
        //             y: startPoint
        //         }
        //     },
        //     {
        //         action: 'wait',
        //         options: {
        //             ms: 1000
        //         }
        //     },
        //     {
        //         action: 'moveTo',
        //         options: {
        //             x: anchor,
        //             y: endPoint
        //         }
        //     },
        //     {
        //         action: 'release',
        //         options: {}
        //     }
        // ])
        await browser.pause(7000)
        await driver.touchPerform([
            { action: 'press', options: { x: 953, y: 1750 }},
            { action: 'wait', options: { ms: 500 }},
            { action: 'moveTo', options: { x: 989, y: 356 }},
            { action: 'release' }
          ]);

        // 3. Click on ACTIVE button
        await $(ACTIVE_BUTTON).click()
        await browser.pause(7000)
    });
    

});