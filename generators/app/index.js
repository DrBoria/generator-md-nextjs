'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing() {
    this.composeWith('md-eslint', {
      /* options to pass to the composed generator */
      framework: 'next'
    });
  };


  install() {
    this.spawnCommand('npx', ['create-next-app@latest', '--ts', '--eslint']);
  }
};
