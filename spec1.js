describe ('Protractor baby steps',function(){
   
    it('Addition',function(){
        // calc(4,6,1)
        browser.get("http://juliemr.github.io/protractor-demo/");

           element(by.css(".input-small:nth-child(1)")).sendKeys("4");
           element(by.tagName('option:nth-child(1)')).click();
           element(by.css(".input-small:nth-child(3)")).sendKeys("6")
            element(by.css('#gobutton')).click()
              //assertion
        //    expect( element(by.tagName('h2')).getText()).toBe("10")
        element(by.tagName('h2')).getText().then((text)=>{
            console.log("Result",text);
            expect(text).toBe('11')
        })
            browser.sleep(1000);
        
    })
    it('Subtraction',function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.css(".input-small:nth-child(1)")).sendKeys("4");
        element(by.tagName('option:nth-child(5)')).click();
        element(by.css(".input-small:nth-child(3)")).sendKeys("6")
         element(by.css('#gobutton')).click()
         //assertion
        //  expect( element(by.tagName('h2')).getText()).toBe("-2")
     element(by.tagName('h2')).getText().then((text)=>{
         console.log("Result",text);
         expect(text).toBe('-2')
     })
         browser.sleep(2000);
    })
})