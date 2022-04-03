describe("APi Lerning", function(){

    it("save ScreenShot", async function(){

        const Form_Menu = '//android.widget.Button[@content-desc="Forms"]'
        const switch_button = '~switch'
        // const dateNow = Date.now();
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = (dataAtual.getMonth() + 1);
        const ano = dataAtual.getFullYear();
        const horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();
        var segundos = dataAtual.getSeconds();
        var segundos2 = (dataAtual.getSeconds() + 1);
        // var dataCompleta = dia+"_"+mes+"_"+ano+"_"+horas+"_"+minutos+"_"+segundos;
        // console.log(dataCompleta)
        //0. go to home 
        $(Form_Menu).click()
        await browser.pause(9000)
        //1. take a picture - full screen
        await browser.saveScreenshot("./screenshot/telaFull_"+dia+"_"+mes+"_"+ano+"_"+horas+"_"+minutos+"_"+segundos+".png")
        //2. take a picture Switch button
        await $(switch_button).saveScreenshot("./screenshot/switch_"+dia+"_"+mes+"_"+ano+"_"+horas+"_"+minutos+"_"+segundos2+".png")

       

    })
})