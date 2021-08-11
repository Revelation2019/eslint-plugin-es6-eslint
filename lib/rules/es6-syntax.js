/**
 * @fileoverview 检视是否有ES6语法
 * @author sheng zhou<zhousheng_zuel@163.com>
 */
'use strict';

const { isEmptyComments, docsUrl } = require('../utils');

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: '检视是否有ES6语法',
      category: 'Fill me in',
      recommended: true,
      url: docsUrl('es6-syntax'),
    },
    fixable: 'whitespace',  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function(context) {

    return {
      'Block': (node) => {
        const { value } = node;
        if (isEmptyComments(value)) {
          context.report({
            node,
            message: '多行注释内容不能为空',
            fix: (fixer) => {
              return fixer.remove(node);
            },
          });
        }
      },
      'Line': (node) => {
        const { value } = node;
        if (isEmptyComments(value)) {
          context.report({
            node,
            message: '单行注释内容不能为空',
            fix: (fixer) => {
              return fixer.remove(node);
            },
          });
        }
      },
    };
  },
};
