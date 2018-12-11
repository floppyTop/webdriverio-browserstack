var assert = require('assert');

// TODO,
// Identify why 'w | w w.com' matches when this is ran, but not in RegExr
function titlePatternTest( string ) {
  const pattern = new RegExp('^(.*?\|)+(.*?\|)+(.*)+(.com)+$', 'g');

  return pattern.exec( string );
}

describe('UHS | Title Test', function() {
  it('opens google', function () {
    browser
      .url('https://www.google.com/ncr');
      
    assert(browser.getTitle().match(/Google/i));
  });
});