# ng-params

![npm](https://img.shields.io/npm/v/ng-params) ![library size](https://img.shields.io/github/size/hoangtranson/ng-params/lib/index.js) ![npm](https://img.shields.io/npm/dw/ng-params)

> URL helper library

## Tech stacks

- TypeScript
- Jest
- Prettier
- tslint

- Npm
    `npm i ng-params`
- Yarn
    `yarn add ng-params`

## Features

- Get queries in object format
- Pick query params
- Exclude query params

## Benefits

- Small bundle size
- Work with all frameworks
- Simple to use

## Usage

It is simple to use the library, just import it directly to the typescript component

```typescript
import PARAMS from "ng-params";
```

- Get queries in object format

    Example:

    ```typescript
    // URL https://stackoverflow.com/jobs?so_medium=StackOverflow&so_source=SiteNav
    const _param = new PARAMS();
    console.log(_param.queries);
    ```

- Pick query params

    Example:

    ```typescript
    // URL https://stackoverflow.com/jobs?so_medium=StackOverflow&so_source=SiteNav
    const _param = new PARAMS();
    const result = _url.pick(['so_source']);
    console.log(result);
    ```

- Exclude query params

    Example:

    ```typescript
    // URL https://stackoverflow.com/jobs?so_medium=StackOverflow&so_source=SiteNav
    const _param = new PARAMS();
    const result = _url.exclude(['so_source']);
    console.log(result);
    ```