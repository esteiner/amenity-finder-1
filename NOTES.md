# Scratchpad

- Initialize `$ npm init @open-wc`
- Setup prettier for nice code formatting (IDEA)
    - Install [Prettier plugin](https://plugins.jetbrains.com/plugin/10456-prettier/)
    - Format on save: `Prettier` → `Run on save for files`
    - Increase width with `printWidth: 160` (add to `package.json`)
- Add basic layout with Material WC:
    - Install components `$ npm install @material/mwc-top-app-bar-fixed @material/mwc-icon @material/mwc-icon-button @material/mwc-drawer`
    - Add fonts
      ```
          <!-- Your application must load the Roboto and Material Icons fonts. -->
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
      ```
