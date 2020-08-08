module.exports = {
  rules: {
    'use-triple-equals': {
      create: function (context) {
        return {
          BinaryExpression(node) {
            if (node.operator === '!=' || node.operator === '==') {
              context.report({
                node,
                message: `ACK-tually, you should use ${node.operator}= because ${node.operator} is buggy.`,
              });
            }
          },
        };
      },
    },
    'use-double-equals': {
      create: function (context) {
        return {
          BinaryExpression(node) {
            if (node.operator === '!==' || node.operator === '===') {
              context.report({
                node,
                message: `ACK-tually, you should use ${node.operator.substr(
                  0,
                  2
                )} because ${node.operator} is overkill.`,
              });
            }
          },
        };
      },
    },
    'use-normal-functions': {
      create: function (context) {
        return {
          VariableDeclarator(node) {
            if (node.init.type === 'ArrowFunctionExpression') {
              context.report({
                node,
                message: `ACK-tually, normal functions declarations are better and less ambiguous.`,
              });
            }
          },
        };
      },
    },
    'use-arrow-functions': {
      create: function (context) {
        return {
          FunctionDeclaration(node) {
            if (node.type === 'FunctionDeclaration') {
              context.report({
                node,
                message: `ACK-tually, we are modern, you should use arrow functions.`,
              });
            }
          },
        };
      },
    },
  },
};
