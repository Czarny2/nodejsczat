const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ile masz lat? ', (answer) => {
    answer=Number(answer)
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});