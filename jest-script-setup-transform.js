const { raw } = require('unplugin-vue2-script-setup').default
const transform = raw({ reactivityTransform: true }).transform

// Targets v0.10.2
module.exports = {
  async process (source, filename, ...args) {
    const transformed = await transform(source, filename)
    const code = transformed ? transformed.code : source
    return require('@vue/vue2-jest').process.call(this, code, filename, ...args)
  }
}

// Targets v0.10.1
// module.exports = {
//   process (source, filename, ...args) {
//     const transformed = transform(source, filename)
//     const code = transformed ? transformed.code : source
//     return require('@vue/vue2-jest').process.call(this, code, filename, ...args)
//   }
// }
