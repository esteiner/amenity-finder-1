# Scratchpad

- Initialize `$ npm init @open-wc`
- Setup prettier for nice code formatting (IDEA)
    - Install [Prettier plugin](https://plugins.jetbrains.com/plugin/10456-prettier/)
    - Format on save: `Prettier` → `Run on save for files`
    - Increase width with `printWidth: 160` (add to `package.json`)
- Remove `amenity-finder.js`, use `customElements.define('amenity-finder', AmenityFinder);` in `AmenityFinder.js` directly
    - The separation only makes sense if we want to provide JS Classes + Custom Elements separately
- Add basic layout with Material WC:
    - Install components `$ npm install @material/mwc-top-app-bar-fixed @material/mwc-icon @material/mwc-icon-button @material/mwc-drawer`
    - Add fonts (https://github.com/material-components/material-components-web-components#fonts)
      ```
          <!-- Your application must load the Roboto and Material Icons fonts. -->
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
      ```
      Use same font as default: `font-family: 'Roboto', sans-serif;` (in `index.html`)
    - Add sidebar property, toggle method + `MDCDrawer:closed` listener! 
- Update dependencies `$ npx npm-upgrade`
    - Remove `git add` in `lint-staged` in `package.json`
    - Install `eslint-plugin-lit` for more recommended code style checks
    
## Links

- Material WC
  - https://material-components.github.io/material-components-web-components/demos/index.html
  - https://github.com/material-components/material-components-web-components
