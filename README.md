# React PWA with offline features & cssnext
**Based on `CRA`** and still a work in progress in order to improve performance

## Why do I want this?
I wanted to create a boilerplate which permitted me to develop a PWA with the next features of css
like variables, custom media queries but also a boilerplate with offline storage available on most browsers
with IndexedDB. This is not a boilerplate you can use for simple application but more like application with
lot of data you need to persist etc... This is still a work in progress, I will improve documentation as much as I can.

## What do I need to get started
- Node LTS : you can use [nvm](https://github.com/creationix/nvm) to handle different versions of node on your computer
- [yarn](https://yarnpkg.com/en/)


## What's in the box

You can see demo [here](https://davidvenin.github.io/react-pwa-cssnext/)

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Jest](https://facebook.github.io/jest/)
- [Axios](https://github.com/axios/axios)
- [Axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
- [Redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)
- [Redux-persist](https://github.com/rt2zz/redux-persist)
- [localForage](https://github.com/localForage/localForage)
- [PostCSS](http://postcss.org/)
- [CSS-Modules](https://github.com/css-modules/css-modules)
- [cssnext](http://cssnext.io/)
- [sw-precache](https://github.com/GoogleChromeLabs/sw-precache)
- [ES6](http://es6-features.org/) with [babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## How do I use this?

You can find full documentation [here](https://github.com/davidvenin/react-pwa-cssnext/wiki).
Still need improvments

## Usage

Before all, **DO NOT USE THIS FOR A SPA WITH NO DATA OR NO API** It will be overkill and too much effort for nothing.

- `yarn` will install dependencies
- `yarn start` will run on port `:1111`
- `yarn build` will create a `build/` folder ready to deploy

## How can you contribute ?
Feel free to open issues and create PR if you see something wrong, I will appreciate.

### License
* [MIT](https://github.com/angular/angular.js/blob/master/LICENSE)
