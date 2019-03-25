var table = 15;
var operator = 'multiplication';
var i = 2;
var msg = '';

if (operator === 'multiplication') {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>';
    i++;
  }
} else {
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>';
    i++;
  }
}
 var el = document.getElementById('chalkboard');
 el.innerHTML = msg;
