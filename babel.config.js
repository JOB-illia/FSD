module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        'babel-plugin-root-import',
        ['babel-plugin-module-resolver', {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./test'],
            "@shared/*": "./src/shared/*",
            "@app/*": "./src/app/*",
            "@screens/*": "./src/screens/*",
          }
        }]
    ]
  };
};
