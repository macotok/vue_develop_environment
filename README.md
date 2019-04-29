# Vue Develop Environment

## Develop

- webpack
- webpack-dev-server
- ESLint for Vue.js
- sideEffects: false
- resolve
    - extensions .js/.vue
    - alias vue$/@
- loader
    - vue
    - babel
    - scss
        - style(MiniCssExtractPlugin.loader)
        - css
        - PostCSS
        - sass
    - url
        - image file
        - media file
- Chunks(all)
- minimize to style.css
- plugins
    - VueLoaderPlugin
    - MiniCssExtractPlugin
    - CopyWebpackPlugin
    - ImageminPlugin
    - HtmlWebpackPlugin
