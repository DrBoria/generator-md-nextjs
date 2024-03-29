'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-md-nextjs:eslint', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/eslint'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
