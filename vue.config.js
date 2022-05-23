const { defineConfig } = require('@vue/cli-service')
const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default

module.exports = defineConfig({
  parallel: false, // disable thread-loader, which is not compactible with this plugin
  configureWebpack: {
    plugins: [
      ScriptSetup({ reactivityTransform: true })
    ]
  },
  transpileDependencies: true,
  lintOnSave: false
})
