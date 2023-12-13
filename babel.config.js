module.exports = function(api) {
  api.cache(true);
  const disableImportExportTransform = true;
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          native: {
            disableImportExportTransform,
          },
          web: {
            disableImportExportTransform,
          },
        },
      ],
    ],
    plugins: [
      'react-native-reanimated/plugin',
      'react-native-paper/babel',
      '@babel/plugin-proposal-export-namespace-from',
    ],
  };
};
