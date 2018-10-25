# `multiScan` operator for RxJS
## rxjs-multi-scan
A combination operator that combines multiple sources of scan operations.

## Installation
Install using NPM CLI
```
npm install --save rxjs-multi-scan
```

or using Yarn CLI
```
yarn add rxjs-multi-scan
```

## Use cases
Create a reactive state container that reacts to multiple observables with a
simple, easy-to-read syntax. Each source is combined with a reducer function to
reduce the current state and the emitted value to a new state.

## Usage
```typescript
import { Observable, Subject } from 'rxjs';
import { multiScan } from 'rxjs-multi-scan';

const initialCount: number = 0;
const add: Subject<number> = new Subject();
const subtract: Subject<number> = new Subject();
const count: Observable<number> = multiScan(
  add, (count, addend) => count + addend,
  subtract, (count, subtrahend) => count - subtrahend,
  initialCount);
```
