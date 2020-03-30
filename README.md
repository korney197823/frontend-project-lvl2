
[![Maintainability](https://api.codeclimate.com/v1/badges/866e256647efaa51bca1/maintainability)](https://codeclimate.com/github/korney197823/frontend-project-lvl1/maintainability)
![](https://github.com/korney197823/frontend-project-lvl1/workflows/Node%20CI/badge.svg)

## Difference Calculator
> Utility for finding differences in configuration files.
### Installation:
```bash
npm install -g korneydv-difference-calculator
```
### Utility features:
1. Support for different formats
2. Report generation as plain text, pretty and json

### Usage example:
```bash
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```

