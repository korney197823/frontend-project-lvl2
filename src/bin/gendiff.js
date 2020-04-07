#!/usr/bin/env node
import { program } from 'commander';
import { description, version } from '../../package.json';
import getDiff from '../engine.js';


program
  .version(version, '-v, - version')
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <seconfConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(getDiff(firstConfig, secondConfig));
  });

program.parse(process.argv);
