# Express API Starter with Typescript

## require at least one

- [require atleast one](https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist)
Development utilities:

- [typescript](https://www.npmjs.com/package/typescript)
  - TypeScript is a language for application-scale JavaScript.
- [ts-node](https://www.npmjs.com/package/ts-node)
  - TypeScript execution and REPL for node.js, with source map and native ESM support.
- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [typescript-eslint](https://typescript-eslint.io/)
  - Tooling which enables ESLint to support TypeScript.
- [jest](https://www.npmjs.com/package/mocha)
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

```js
// funky stuff in ts
// adding to the request object
(req as any).name = "bob"



type Fn  = (a:number, b:number)=> number

```
