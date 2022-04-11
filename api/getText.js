describe ('Learning WebdriverIO API', function(){
    
    it('learn getValue', async function (){
        
        const Form_Menu = '//android.widget.Button[@content-desc="Forms"]'
        const Input_text_field ='~text-input'
        const Input_text_displayed ='~input-text-result'

        //0. Click on Form icon from homescreen

        $(Form_Menu).click()

        //Usei abaixo para debugar e aprender a ver item por itens
        // const teste = await $(Form_Menu).click();
        // console.log(teste)
        // ou 
        // $(Form_Menu).Click().then((response) => console.log(response));

        
        //1. Try to input some values in text field
        await $(Input_text_field).setValue('testteste')

        //2. Get the value from the field (you have typed)

        let displayResultado = await $(Input_text_displayed).getText()
        //3. Print out that value
        console.log('teste')
        console.log('Input text:', displayResultado)
        console.log(displayResultado)

    });
    
});