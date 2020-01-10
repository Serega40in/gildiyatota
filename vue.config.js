module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
