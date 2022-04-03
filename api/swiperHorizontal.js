describe('Swipr horizontally', function () {

    it('should swipr horizontally', async function () {
        const SWIPE_ICON_HOME_SCREEN = `~Swipe`
        const SWIPE_HEADER_TEXT = `~Swipe-screen`

        // 1. click on SWIPE ICON
        await $(SWIPE_ICON_HOME_SCREEN).click()

        // await $(SWIPE_HEADER_TEXT).click()

        // await driver.touchAction([
        //     {action: 'longPress', x: 463, y: 524},
        //     {action: 'moveTo', x: 21, y: 520},
        //     'release'
            
        //   ]);
          
        // const screen = await $('~Swipe-screen');

        // simple touch action on element
        // await browser.touchAction({
        //     action: 'tap',
        //     element: screen
        // });
        
        // await driver.touchAction([
        //     {action: 'press', x: 1032, y: 1249},
        //     { action: "wait", options: { mseconds: 500 }},
        //     {action: 'wait', options: { mseconds: 100 }},
        //   {action: 'moveTo', x: 163, y: 1246},
        //   'release'
        // ]);



        ////////////////////////////////////
        await browser.pause(8000)
        await driver.touchPerform([
          { action: 'press', options: { x: 1032, y: 1249 }},
          { action: 'wait', options: { ms: 500 }},
          { action: 'moveTo', options: { x: 163, y: 1246 }},
          { action: 'release' }
        ]);

        await driver.touchPerform([
          { action: 'press', options: { x: 1032, y: 1249 }},
          { action: 'wait', options: { ms: 500 }},
          { action: 'moveTo', options: { x: 163, y: 1246 }},
          { action: 'release' }
        ]);

        await driver.touchPerform([
          { action: 'press', options: { x: 1032, y: 1249 }},
          { action: 'wait', options: { ms: 500 }},
          { action: 'moveTo', options: { x: 163, y: 1246 }},
          { action: 'release' }
        ]);
        ///////////////////////////////

        //   await driver.performActions([
        //       {
        //     "type": "pointer",
        //     "id": "finger1",
        //     "parameters": {"pointerType": "touch"},
        //     "actions": [
        //         {"type": "pointerMove", "duration": 0, "x": 463, "y": 524},
        //         {"type": "pointerDown", "button": 0},
        //         {"type": "pause", "duration": 500},
        //         {"type": "pointerMove", "duration": 1000, "origin": "pointer", "x": 21, "y": 520},
        //         {"type": "pointerUp", "button": 0}
        //     ]
        //         }
        //     ]);

         
          //android.view.ViewGroup[@content-desc="card"])[1]

        // 2. Touch on the screen

        // // 3. Swipe from right to left
        // const startPercentage = 10;s
        // const endPercentage = 90;
        // const anchorPercentage = 50;

        // const { width, height } = driver.getWindowSize();
        // const anchor = height * anchorPercentage / 100;
        // const startPoint = width * startPercentage / 100;
        // const endPoint = width * endPercentage / 100;
        // driver.touchPerform([
        // {
        //     action: 'press',
        //     options: {
        //     x: startPoint,
        //     y: anchor,
        //     },
        // },
        // {
        //     action: 'wait',
        //     options: {
        //     ms: 100,
        //     },
        // },
        // {
        //     action: 'moveTo',
        //     options: {
        //     x: endPoint,
        //     y: anchor,
        //     },
        // },
        // {
        //     action: 'release',
        //     options: {},
        // },
        // ]);
        await browser.pause(10000)
    })
});