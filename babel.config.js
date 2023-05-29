module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".js", ".ts", ".tsx"],
      "alias": {
        '@assets': './src/assets',
        '@components': './src/components',
        '@screens': './src/screens',
        '@storage': './src/storage',
        '@utils': './src/utils',
      }
    }]
  ]
};
