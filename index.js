#!/usr/bin/env node

// import dependencies
const cleverbot = require('cleverbot-free');
const readline = require('./readline');
const { readFileSync } = require('fs');
const { join } = require('path');
const { version } = require('./package.json');


// save history
let history = [];


// draw banner
let banner = readFileSync(join(__dirname, 'banner.txt')).toString();
console.clear();
console.log(`${banner}\n`);
console.log(`CleverCMD v${version}`);
console.log('Type ".quit" to exit\n\nStart a conversation:');


// async action loop
(async () => {
  let hasQuit = false;
  while (!hasQuit) {

    // get user input
    const input = await readline(`> `);
    if (input === '.quit') {
      hasQuit = true;
      continue;
    }

    // send message to cleverbot
    const response = await cleverbot(input, history);

    // save history
    history.push(input);
    history.push(response);

    // print response
    console.log(`${response}\n`);
  
  }
})();