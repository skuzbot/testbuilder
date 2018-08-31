//Detects Credit Card Network from Card Number
// Diners club        prefix 38, 39                                length 14
// American Express   prefix 34, 37                                length 15
// Visa               prefix 4                                     length 13, 16, 19
// MasterCard         prefix 51-55                                 length 16
// Discover           prefix 6011, 644-649, 65                     length 16, 19
// Maestro            prefix 5018, 5020, 5038, 6304                length 12-19
// China UnionPay     prefix 622126-622925, 624-626, 6282-6288                      length 6-19
// Switch             prefix 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759     length 16, 18, or 19




var detectNetwork = function(cardNumber) {
  var firstDigit = parseInt(cardNumber.slice(0, 1));	
  var firstTwoDigits = parseInt(cardNumber.slice(0, 2));
  var firstThreeDigits = parseInt(cardNumber.slice(0, 3));
  var firstFourDigits = parseInt(cardNumber.slice(0, 4));
  var firstSixDigits = parseInt(cardNumber.slice(0, 6));
  var cardLength = cardNumber.length;

  var dinerPrefix = [38, 39];
  var amexPrefix = [34, 37];
  var visaLength = [13, 16, 19];
  var discoverLength = [16, 19];
  var maestroPrefix = [5018, 5020, 5038, 6304];
  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var switchLength = [16, 18, 19];

  //in range function
  var isBetween = function(x, min, max) {
    return (x >= min) && (x <= max);
  };

  if ((dinerPrefix.includes(firstTwoDigits)) && (cardLength === 14)) {
  	return 'Diner\'s Club';
  }
  else if ((amexPrefix.includes(firstTwoDigits)) && (cardLength === 15)) {
  	return 'American Express';
  }
  else if ((firstDigit === 4) && (!switchPrefix.includes(firstFourDigits)) && (visaLength.includes(cardLength))) {
  	return 'Visa';
  }
  else if ((isBetween(firstTwoDigits, 51, 55)) && (cardLength === 16)) { 
  	return 'MasterCard';
  }
  else if ( ((firstFourDigits === 6011) || (isBetween(firstThreeDigits, 644, 649)) || (firstTwoDigits === 65)) && (discoverLength.includes(cardLength)) ) {
    return 'Discover';
  }
  else if ((maestroPrefix.includes(firstFourDigits)) && (isBetween(cardLength, 12, 19))) {
    return 'Maestro'; 
  }
  else if (((isBetween(firstSixDigits, 622126, 622925)) || (isBetween(firstThreeDigits, 624, 626)) || (isBetween(firstFourDigits, 6282, 6288))) && (isBetween(cardLength, 6, 19))) {
    return 'China UnionPay';
  }
  // Switch prefix 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759     length 16, 18, or 19
  else if ((switchPrefix.includes(firstFourDigits)) || (switchPrefix.includes(firstSixDigits)) && (switchLength.includes(cardLength))) {
    return 'Switch';
  }

};




