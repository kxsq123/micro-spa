import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js',
  output: {
    file: './lib/index.js',
    format: 'umd',
    name: 'microSpa',
    sourcemap: true
  },
  plugin: [
    serve({
      openPage: './index.html',
      contentBase: '',
      port: 8090
    })
  ]
}