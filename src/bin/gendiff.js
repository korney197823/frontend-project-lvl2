#!/usr/bin/env node
import program from 'commander';
import getDiff from '../engine.js';

const description = 'Compares two configuration files and shows a difference';
const version = '1.0.0';


program
  .version(version, '-v, - version')
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <seconfConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(getDiff(firstConfig, secondConfig));
  });

program.parse(process.argv);
