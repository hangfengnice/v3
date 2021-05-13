const registerRouter = require('./backend/router')

module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before (app) {
      console.log(app, 'app')
      registerRouter(app)
    }
  }
}
