module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader' // npm install -D raw-loader
        }
      ]
    }
  }
}
