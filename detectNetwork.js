//Detects Credit Card Network from Card Number

// Nice work! Extend your function to support two popular networks, Visa and Mastercard:

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.


var detectNetwork = function(cardNumber) {
  var firstDigit = (''+cardNumber)[0];	
  var firstTwoDigits = (''+cardNumber)[0]+(''+cardNumber)[1];
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
};


