describe('Learning WebDriverIO API', function (){
    
    it('addValue API', async function ()
    {

        //Declare element selector values
        const Login_ICON_HOME_SCREEN = '~Login'
        const Email_TXT_FIELD='~input-email'
        const Password_TXT_FIELD ='~input-password'
        const Login_BTN ='~button-LOGIN'


        // 1. Click on login on HomeScreen
        $(Login_ICON_HOME_SCREEN).click()
        
        // 2. Fill email field by using addValue
        $(Email_TXT_FIELD).addValue('a@')
        $(Email_TXT_FIELD).addValue('.com')
    
        // 3 . Demostrate about setValue
        await $(Email_TXT_FIELD).setValue('alou@alou.com')

        //4. Clear the text field
        
        
        await $(Email_TXT_FIELD).clearValue()
        $(Password_TXT_FIELD).setValue('teste123')
        
        
       await browser.pause(9000); // espera até fazer todas ações acima
       // $(Login_BTN).click()

        
    });


});