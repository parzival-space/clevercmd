const readline = require('readline');

module.exports = async (prompt) => {
  // start the prompt
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // creates new prompt and return a promise
  return new Promise((resolve) => {
    rl.question(prompt, (result) => {
      resolve(result);
      rl.close();
    });
  });
};