// start with two variables:
//  1) number holds the number that the clculations will be performed with (in this case the number 15)
//  2) operator indicates whether it should be addition or mulipplication (in this case it is performing multiplication)

// an IF statement is used to decide to perform add. or mult. with the number
// inside the conditional statement, a while loop is used to calculate the results

var table = 15;
var operator = 'multiplication';
var i = 2;
var msg = '';

if (operator === 'multiplication') {
  while (i < 11) {
    msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} else {
  while ()
}
