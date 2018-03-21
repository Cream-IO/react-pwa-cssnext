# React PWA with offline features & cssnext
**Based on `CRA`**

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
