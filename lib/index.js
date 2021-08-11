/**
 * @fileoverview 校验代码注释规范
 * @author sheng zhou<zhousheng_zuel@163.com>
 */
'use strict';

const requireIndex = require('requireindex');

// import all rules in lib/rules
const rules = requireIndex(__dirname + '/rules');

module.exports = {
  rules,
  configs: {
    recommended: {
      plugins: ['es6-eslint'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
      },
      rules: {
        'es6-eslint/es6-syntax': 2,
      },
    },
  },
};

