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
