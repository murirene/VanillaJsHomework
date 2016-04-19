/* Functional Test. Nightwatch.js, runs on Selenium
 *  */

module.exports = {
    '@tags': ['test'],
    'Assignments': function(browser) {
      browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
	  .waitForElementVisible('#numberSet', 3000)
	  .setValue('#numberSet', 5)
	  .click('#prime-button')
	  .waitForElementVisible('#prime-result', 3000)
	  .getText('#prime-result', function(result){
		  var primes = result.value.split(',');
          this.assert.equal(primes.length, 5)
	  })
	  .clearValue('#numberSet')
	  .setValue('#numberSet', 'NotANumber')
	  .click('#prime-button')
	  .waitForElementVisible('#numberSet.invalid', 3000)
	  .clearValue('#numberSet')
	  .setValue('#numberSet', '3')
	  .click('#prime-button')
	  .waitForElementVisible('#numberSet.valid', 3000)
	  .pause(1000)
	  .click('#assignment2')
	  .waitForElementVisible('#editableContent', 3000)
	  .click('#dom-api-button')
	  .waitForElementPresent('div[contenteditable] blockquote', 3000)
	  .click('#dom-api-button')
	  .waitForElementNotPresent('div[contenteditable] blockquote', 3000)
	  .pause(1000)
	  .click('#assignment3')
	  .setValue('#findPairs', "1,2,3,4,5")
	  .setValue('#sum', 5)
	  .click('#sum-pairs-button')
	  .waitForElementVisible('#sum-pairs-result', 3000)
	  .getText('#sum-pairs-result', function(result){
	  	this.assert.equal(result.value, "{2, 3},{1, 4}")
	  })
	  .pause(1000)
	  .click('#assignment4')
	  .setValue('#sportsCar', 2)
	  .setValue('#familyCar', 1)
	  .setValue('#miniVan', 1)
	  .setValue('#truck', 1)
	  .setValue('#cargoVan', 1)
	  .setValue('#cargo', 1000)
	  .click('#cargo-button')
	  .waitForElementPresent('#cargoContainer table', 3000)
	  .getText('#cargoContainer table th', function(result) {
		  this.assert.equal(result.value, 'Sports Car(s) 2 Family Car(s) 1Truck(s) 1 Mini-Van(s) 1 Cargo-Van(s)1 Cargo 1000 lbs');
	  })
	  .getText('#cargoContainer > table > tbody > tr:nth-child(1) > td', function(result) {
		  this.assert.equal(result.value, 'A Sports Car with 100');
	  })	  		  	  	  	  	  
      .end();
    }

}
