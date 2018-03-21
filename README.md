# React PWA with offline features & cssnext
**Based on `CRA`** and still a work in progress in order to improve performance

## How to make it works

- `yarn` will install dependencies
- `yarn start` will run on port `:1111`
- `yarn build` will create a `build/` folder ready to deploy

This is an opinionated starter with the following stack :

- React
- Redux and Redux Persist with localForage
- Axios to handle asynchronous call
- Webpack
- CSS Module with cssnext
- React router redux : will be removed


## CSS Env
- Use of [cssnext](http://cssnext.io/usage/)
- Use of [CSS Modules](https://github.com/css-modules/css-modules)
- Use of envConfig file based on `process.env.DEPLOY`

In order to make your app fully customizable across all your deploys needs,
I created a file in `config/env/default.json`. You can, of course delete it if you don't need it and add multiple files with multiple config

To create new one, just add a new file under `config/env/yourConfig.json` and update your `package.json` like this :

```
"start-yourConfig": "DEPLOY:yourConfig node scripts/start.js",
"build-yourConfig": "DEPLOY:yourConfig node scripts/build.js && sw-precache --config=sw-precache-config.js",
```

`config/env/yourConfig.json` can look like this :

```json
{
  "cssVariables": {
    "MAIN_COLOR": "#333"
  },
  "global": {
    "foo": "bar",
  }
}

```

## Async configuration

`src/helpers/api.js`

This file will contain the strict minimum to handle async call.

```js
import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.API_URL, // you need to update this in webpack config
  responseType: 'json',
  xsrfCookieName: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});
```

this is not mandatory but you can intercept all requests with the following
and pass `token` or whatever you want to fit your needs.

```js
export const options = {
  interceptors: {
    request: [
      (store, config) => {
        return config;
      }
    ],
    response: [
      (store, response) => {
        return response;
      }
    ]
  }
}
```
