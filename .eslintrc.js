module.exports = {
  settings: {
    'import/resolver': {
      alias: [
        ['$hooks', './src/hooks'],
        ['$theme', './src/common/theme'],
        ['$components', './src/components'],
        ['$redux-toolkit', './src/redux-toolkit']
      ]
    }
  }
}
