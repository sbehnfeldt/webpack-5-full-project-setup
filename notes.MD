# Developer Notes

Notes for sing-along with ["Webpack 5 Full Project Setup" video](https://www.youtube.com/watch?v=TOb1c39m64A)
YouTube video by [Swashbuckling with Code](https://www.youtube.com/@SwashbucklingwithCode)

## Intro
What will be covered:
- webpack 5
- babel transpiling
- React with JSX (dev and prod builds)
- Source Maps
- Hot-Module Reloading
- CSS
- SASS
- PostCSS with auto-prefixing of newer CSS features
- Browser list config for customizing cross-browser support
- Outputting images, both as separate files and also inline in the JS bundle for faster loading of SVGs, icons and other
  small images
- Creating output HTML file from simple custom template
- Automatic cleaning of output directory
- deploy and host project on "Netlify" with automatic production builds every time we push to the main branch
- React Fast Refresh (hot reloading tool)

This course is from the perspective of a **Single Page App**

## Scaffolding
Setting up the project and repo
```shell
$> mkdir webpack-5-full-project-setup
$> cd webpack-5-full-project-setup
$> git init
$> git remote add origin https://github.com/sbehnfeldt/webpack-5-full-project-setup.git 
$> git push --set-upstream origin master 
$> npm init
$> npm i -D webpack webpack-cli webpack-dev-server
```

Add scripts to the NPM dependencies file:
```json
{
  "scripts": {
    "start" : "webpack serve",
    "watch" : "webpack --watch",
    "build" : "webpack"
  }
}
```
Bundle the assets
```shell
$> npm run build
```

## Dev Server
Webpack offers a development web server.  It does not process PHP.  
It provides hot-module replacement _without_ re-bundling assets, 
but rather by injecting HMR functionality into the bundle
and providing updates therefrom.

Since this video was made, the default behavior of Webpack's dev server was changed to serve files from a directory called "public".
To serve them from "dist" required creating the webpack config file (_webpack.config.js_) ahead of schedule and adding the following:
```js
const path = require( 'path' );

module.exports = {
    devServer: {
        static: './dist'
    },
}
```

## Babel
Transpile source JS into JS compatible with older versions for older browsers.
```shell
$> npm i -D babel-loader @babel/core @babel/preset-env
```
Update webpack config:
```js
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
```
Babel looks for a Babel config file, either .babelrc, or babel.config.js. We will use the latter:
```js
module.exports = {
    presets: ["@babel/preset-env"]
}
```

## Source Maps
In webpack config file, set "devtool" to "source-map". This will provide source JS, rather than the bundled and transpiled JS,
in the browser's dev tools.

Update the "build" script in package.json to build production version.
Provide a second script to build dev version.
```json
{
    "build": "NODE_ENV=production webpack",
    "build-dev": "webpack"
}
```

Then update the "mode" value in webpack config:
```js
let mode   = "development";
if ("production" === process.env.NODE_ENV) {
    mode = "production";
}

module.exports = {
    mode: mode,
    ...
}
```
