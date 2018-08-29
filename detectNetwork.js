//Detects Credit Card Network from Card Number
// Diners club        prefix 38, 39                 length 14
// American Express   prefix 34, 37                 lenfth 15
// Visa               prefix 4                      length 13, 16, 19
// MasterCard         prefix 51-55                  length 16
// Discover           prefix of 6011, 644-649, 65   length 16, 19.
// Maestro            prefix 5018, 5020, 5038, 6304 length 12-19.

//Note for morning: I may want to make an array for each card and include prefixes as elements. might be easier.

var detectNetwork = function(cardNumber) {
  var firstDigit = cardNumber.slice(0, 1);	
  var firstTwoDigits = cardNumber.slice(0, 2);
  var firstThreeDigits = cardNumber.slice(0, 3);
  var firstFourDigits = cardNumber.slice(0, 4);
  var cardLength = cardNumber.length;
  if ((firstTwoDigits === '38', '39') && (cardLength === 14)) {
  	return 'Diner\'s Club';
  }
  else if ((firstTwoDigits === '34', '37') && (cardLength === 15)) {
  	return 'American Express';
  }
  else if ((firstDigit === '4') && (cardLength === 13, 16, 19)) {
  	return 'Visa';
  }
  else if ((firstTwoDigits === '51', '52', '53', '54', '55') && (cardLength === 16)) {
  	return 'MasterCard';
  }
  else if ( ((firstFourDigits === 6011) || ((firstThreeDigits >= 644) && (firstThreeDigits <= 649)) || (firstTwoDigits === 65)) && (cardLength === 16, 19) ) {
    return 'Discover';
  }
  else if ((firstFourDigits === 5018, 5020, 5038, 6304) && ((cardLength >= 12) && (cardLength <= 19))) {
    return 'Maestro'; 
  }
};

detectNetwork('3934567890123');

