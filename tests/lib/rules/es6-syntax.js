/**
 * @fileoverview 检视是否有ES6语法
 * @author sheng zhou<zhousheng_zuel@163.com>
 */
'use strict';

const rule = require('../../../lib/rules/es6-syntax');

const RuleTester = require('eslint').RuleTester;

const { config } = require('../utils');

const ruleTester = new RuleTester(config);
ruleTester.run('es6-syntax', rule, {

  valid: [
    `// 提交  `,
    `/** 倒计时 */`,
    `/**
         * @description 校验单行或者多行注释内容是否为空
         * @param {String} value 注释内容
         * @returns {Boolean}
         */
        `,
  ],

  invalid: [
    {
      code: `//   `,
      errors: [{
        message: '注释内容不能为空',
        type: 'Line',
      }],
      output: '',
    },
    {
      code: `/**   */`,
      errors: [{
        message: '注释内容不能为空',
        type: 'Block',
      }],
      output: '',
    },
    {
      code: `
            /**
              *
              */`,
      errors: [{
        message: '注释内容不能为空',
        type: 'Block',
      }],
      output: '',
    },
  ],
});
