# isbetweennumbers



A simple package to check if a number is between



## Installation



```bash

npm install isbetweennumbers

```



## Usage



```typescript

import isbetweennumbers from 'isbetweennumbers';

//value: number, lowerBound: number, upperBound: number

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

## License

MIT

