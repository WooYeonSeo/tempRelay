const { useBabelRc, override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addBabelPlugins(
    'babel-plugin-relay',
  )
)