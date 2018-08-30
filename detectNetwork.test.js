
// Diners Club    prefix 38, 39    length 14
describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345567890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

// American Express   prefix 34, 37   length 15
describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

// Visa   prefix 4    length 13, 16, 19
describe('Visa', function() {

  var assert = chai.assert; 

  it('has a prefix of 4 and a length of 13', function() {
    assert.isOk(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.isOk(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.isOk(detectNetwork('4123456789012345678') === 'Visa');
  });
});

// MasterCard     prefix 51-55    length 16
describe('MasterCard', function() {
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

// Discover   prefix 6011, 644-649, 65   length 16, 19
describe('Discover', function() {
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511123456789012')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511123456789012345')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
      });
    })(prefix)}
});

// Maestro    prefix 5018, 5020, 5038, 6304   length 12-19
describe('Maestro', function() {
  var expect = chai.expect;
  var str = '8';

  for (var length = 12; length <= 19; length++) {
  (function(length) {

    it('has a prefix of 5018 and a length of ' + length, function() {
      expect(detectNetwork('5018' + str.repeat(length - 4))).to.equal('Maestro');
    });

    it('has a prefix of 5020 and a length of ' + length, function() {
      expect(detectNetwork('5020' + str.repeat(length - 4))).to.equal('Maestro');
    });

    it('has a prefix of 5038 and a length of ' + length, function() {
      expect(detectNetwork('5038' + str.repeat(length - 4))).to.equal('Maestro');
    });

    it('has a prefix of 6304 and a length of ' + length, function() {
      expect(detectNetwork('6304' + str.repeat(length - 4))).to.equal('Maestro');
    });
    
  })(length)}

});

// China UnionPay   prefix 622126-622925, 624-626, 6282-6288  length 6-19
describe('China UnionPay', function() {
  var expect = chai.expect;
  var str = '8';

  for (var prefix = 622126;)
  

});

describe('should support China UnionPay')
describe('should support Switch')
