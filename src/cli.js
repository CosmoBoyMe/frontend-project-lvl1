"use strict";
import promptly from 'promptly';

export let x = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}`);
};

