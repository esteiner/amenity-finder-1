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
    - Add fonts
      ```
          <!-- Your application must load the Roboto and Material Icons fonts. -->
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
      ```
    - Add sidebar property, toggle method + `MDCDrawer:closed` listener! 
