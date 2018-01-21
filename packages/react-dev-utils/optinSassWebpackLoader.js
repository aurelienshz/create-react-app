module.exports.default = function(source) {
  try {
    // XXX performance hit of calling require / require.resolve this for every file passed to this loader?
    require.resolve('node-sass');

    // Options are passed to loader using the function `this`. We use `bind`
    // to transparently pass options coming from the webpack config to
    // sass-loader:
    // XXX performance hit of bind?
    const sassLoader = require('sass-loader').bind(this);

    return sassLoader(source);
  } catch (er) {
    throw new Error(
      'It looks like you have required a .scss file. In order for this to work, you need to install node-sass and sass-loader first.'
    );
  }
};
