#!/usr/bin/env node
const { program } = require('commander');
const { description, version } = require('../../package.json');

program
  .version(version, '-v, - version')
  .description(description);

program.parse(process.argv);
