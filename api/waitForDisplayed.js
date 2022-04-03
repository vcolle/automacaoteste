describe("Learning API", function(){

    it('Wait Display', async function(){

        const Login_ICON_HOME_SCREEN = '~Login'
        const Form_Menu = '//android.widget.Button[@content-desc="Forms"]'
        const switch_button = '~switch'
        const campo_resultado = '~switch-text'
        //0. go to the home
        $(Login_ICON_HOME_SCREEN).click()

        //1. Wait sometime - 4 seconds -> Try manually click on the Form screen

        //2. Toggle the Switch button
        $(switch_button).waitForDisplayed({timeout: 4000}) /// OU USAR SOMENTE O:  await $(switch_button).click()
        $(switch_button).click() /// OU USAR SOMENTE O:  await $(switch_button).click()

        //3. Wait a little to see result
        await browser.pause(10000)
    })
})