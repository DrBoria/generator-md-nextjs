'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith('md-eslint', {
      framework: 'nextjs'
      /* options to pass to the composed generator */
    });
  };
};
