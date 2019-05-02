# Vue Develop Environment

## TODO

- jest
- typescript
- actionを1つで引数で保存する場所を変える
- polyfil

## Develop

- sideEffects: false
- webpack
  - webpack-dev-server
  - select mode to develop or production
  - resolve
     - extensions .js/.json/.vue
     - alias vue$/@
  - loader
      - pug
      - vue
      - babel
      - scss
         - style(MiniCssExtractPlugin.loader)
         - css
         - PostCSS(AutoPrefixer)
         - sass
         - global to scss
      - url
         - image
         - webfonts
         - media
  - Chunks(all)
  - minimize
     - css
     - js
  - plugins
     - CopyWebpackPlugin
     - HtmlWebpackPlugin
     - ImageminPlugin
     - MiniCssExtractPlugin
     - StylelintPlugin
     - VueLoaderPlugin
- Lint
   - ESLint
   - StyleLint
- Atomic Design
  - atoms
  - molecules
  - organisms
  - templates
  - pages
- router
- vuex
  - state
  - mutations
  - actions
- .env
