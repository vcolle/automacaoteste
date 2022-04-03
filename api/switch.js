describe('Learning API', function(){

    it('teste switch', async function(){

        const Form_Menu = '//android.widget.Button[@content-desc="Forms"]'
        const switch_button = '~switch'
        const campo_resultado = '~switch-text'
        //0. go to the forms field
        $(Form_Menu).click()
        //1. Toggle the Switch button
        await $(switch_button).click()
        //2. Wait a little to see result
        let mostrar_resultado = await $(campo_resultado).getText();
        console.log(mostrar_resultado)
        await browser.pause(10000)
    });
    
});
