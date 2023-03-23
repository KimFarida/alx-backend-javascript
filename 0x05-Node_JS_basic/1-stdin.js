process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', function(data) {
  var name = data.toString().trim();
  console.log('Your name is:', name);
});

process.on('exit', function() {
  console.log('\nThis important software is now closing');
});
