#!/usr/bin/env node
const { program } = require('commander');
const { description, version } = require('../../package.json');

program
  .version(version, '-v, - version')
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <seconfConfig>');

program.parse(process.argv);
