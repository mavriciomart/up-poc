# UP PoC
PoC for a micro frontend using React.js and single-spa.

## Get Started
1. Clone this repo.
2. Replace every instance of `<<aplication-name>>` for your application's name. There are four of this:

- `package.json`: *name* and *main*
- `index.html`
- `src/Components/Application`

## Run application in Development mode

To test you application by itself you can start a development server.
```
yarn start
```

If you want to test it as a micro frontend you'll need to run
```
yarn start:micro
``` 
and point your core application to the development url.

## Production build
To create a production build:
```
yarn build
```

