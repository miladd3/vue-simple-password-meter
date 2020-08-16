module.exports = {
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-simple-password-meter/' : '/',
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
