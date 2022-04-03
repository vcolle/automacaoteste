
import LoginPage from '../../page_objects/account/Login' 
describe('Account Funcion', async function(){
    it('should raise an error for wrong creditials', async function(){
        
        //1. Click on login Icon form Home Page
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()
        
        //2. Use Login Page Object to interact with elements
        LoginPage.email_txt_field.setValue("testeVini")
        LoginPage.password_txt_field.setValue("senha007")
        LoginPage.login_btn.click()
        
        
        await browser.pause(10000)
        
    });
});
// const parse = require('../../page_objects/account/Login');