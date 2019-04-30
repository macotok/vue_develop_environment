# Vue Develop Environment

## TODO

- jest
- env
- typescript
- json server
- sassをglobalでimport
- store

## Develop

- sideEffects: false
- webpack
  - webpack-dev-server
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
