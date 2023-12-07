# Reactive Property with rxjs

Wrap rxjs Subject to allow access to the most recently emitted value.

## Installation

```sh
npm install rxjs-property
```

## Usage

```js
const ReactiveProperty = require('rxjs-property');

const booleanProp = new ReactiveProperty(false);

const subscription = booleanProp.subscribe(x => {
    console.log(x);
});

booleanProp.value = true; // >> true;
booleanProp.value = true; // no output

booleanProp.setValueAndForceNotify(true); // >> true;
booleanProp.value = false; // >> false;

subscription.unsubscribe();
booleanProp.value = true; // no output

// As observable
const observable = booleanProp.observable();
```

## TypeScript

```ts
import ReactiveProperty from 'rxjs-property';

const booleanProp = new ReactiveProperty<boolean>(false);
```

## Package License

This software is released under the MIT License.
https://opensource.org/licenses/mit-license.php

Copyright (c) 2023 ina-amagami / Amagamina Games, Inc. (ina@amagamina.jp)