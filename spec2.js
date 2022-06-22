describe ('Protractor baby steps',function(){
    function calc(a,b,c){
       
        element(by.css(".input-small:nth-child(1)")).sendKeys(a);
        // element(by.tagName('option:nth-child(c)')).click();
        element(by.css(".input-small:nth-child(3)")).sendKeys(b);
         element(by.css('#gobutton')).click()
     element(by.tagName('h2')).getText().then((text)=>{
         console.log("Result",text);
     })
         browser.sleep(2000);
    }

    it('Addition',function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        calc(4,6,1)
     
    })
   })