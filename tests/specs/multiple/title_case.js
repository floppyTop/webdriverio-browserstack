var assert = require('assert');

function titleCase( title ) {
  var words = title.split(' '),
      titleCaseWords  = words.map(  function( word ) {
        return  word[0].toUpperCase() + word.substring(1);
      } );

  return  titleCaseWords.join(' ');
}

describe('Headings on page are Title Case', function() {
  it('can find search results', function () {
    browser
      .url('https://www.google.com/ncr')
      .setValue('*[name="q"]','BrowserStack\n')
      .pause(5000);
    
    assert(browser.getTitle().match(/BrowserStack - Google Search/i));
  });
});