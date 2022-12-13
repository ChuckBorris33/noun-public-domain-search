module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: { 
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify") 
      }
    }
  }
};
