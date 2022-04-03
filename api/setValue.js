describe('Learning WebDriverIO API', function (){
    
    it('should input username and password OK', async function ()
    {

        //Declare element selector values
        const Login_ICON_HOME_SCREEN = '~Login'
        const Email_TXT_FIELD='~input-email'
        const Password_TXT_FIELD ='~input-password'
        const Login_BTN ='~button-LOGIN'


        // 1. Click on login on HomeScreen
        $(Login_ICON_HOME_SCREEN).click()
        
        // //2. Fill email field
        $(Email_TXT_FIELD).setValue('teste@teste.com')
    
        // //3. Fill password text field
        $(Password_TXT_FIELD).setValue('teste123')
        
        // //4. Click on Login button
        await browser.pause(9000); // espera até fazer todas ações acima
        $(Login_BTN).click()

        await browser.pause(10000); // espera até fechar o app
    });


});