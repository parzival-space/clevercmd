// import dependencies
const cleverbot = require('cleverbot-free');
const readline = require('./readline');


// save history
let history = [];


// async action loop
(async () => {
  while (true) {

    // get user input
    const input = await readline(`> `);

    // send message to cleverbot
    const response = await cleverbot(input, history);

    // save history
    history.push(input);
    history.push(response);

    // print response
    console.log(`${response}\n`);
  
  }
})();