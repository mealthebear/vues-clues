import vuePlugin from 'rollup-plugin-vue';

export default {
  input: "client/src/index.vue",
  output: {
    file: "./client/dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    vuePlugin()
  ]
}
