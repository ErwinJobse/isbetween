# isbetween



A simple package to check if a number is between



## Installation



```bash

npm install isbetween

```



## Usage



```typescript

import isbetweennumbers from 'isbetweennumbers';

value: number, lowerBound: number, upperBound: number

isbetweennumbers(3, 1, 5); // true


isbetweennumbers(7, 1, 5); // false

```


## API



### `isbetweennumbers(value: number, lowerBound: number, upperBound: number): boolean`



Returns `true` if the input number is between `false` if not


### Running Tests



```bash

npm test

```



### Building



```bash

npm run build

```


## Publishing



1. Update version in `package.json`

2. Build the package: `npm run build`

3. Run tests: `npm test`

4. Publish to npm: `npm publish`



## License

MIT

