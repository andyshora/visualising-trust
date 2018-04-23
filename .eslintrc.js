module.exports = {
  'plugins': [
    'react',
    'babel'
  ],
  'extends': ['airbnb'],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '16.2'
    }
  },
  'rules': {
    'babel/new-cap': 1,
    'babel/no-invalid-this': 1,
    'babel/semi': 1,
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', 120],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 3 }],
    'no-inline-comments': ['error'],
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-confusing-arrow': 'off',
    'no-underscore-dangle': 'off',
    'no-else-return': 'off',
    'operator-linebreak': ['error', 'before'],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-closing-bracket-location': [2, { 'selfClosing': 'after-props', 'nonEmpty': 'after-props' }],
    'react/jsx-filename-extension': [ 1, { 'extensions': ['.js', '.jsx'] } ],
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prefer-es6-class': ['error', 'always'],
    'react/no-danger': 'off',
    'semi': ['error', 'always']
  },
  'globals': {
    'hot': true,
    'cold': true,
    '__DEV__': false,
    'describe': true,
    'it': true,
    'documentRef': true,
    'graphql': true
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  }
};
