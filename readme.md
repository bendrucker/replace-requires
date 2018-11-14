# replace-requires [![Build Status](https://travis-ci.org/bendrucker/replace-requires.svg?branch=master)](https://travis-ci.org/bendrucker/replace-requires) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/replace-requires.svg)](https://greenkeeper.io/)

> Replace require statements


## Install

```
$ npm install --save replace-requires
```


## Usage

```js
var replaceRequires = require('replace-requires');

replaceRequires('require("foo")', {foo: 'bar'});
//=> bar
```

## API

#### `replaceRequires(code, replacements)` -> `string`

##### code

*Required*  
Type: `string`

The code to parse and replace.

##### replacements

*Required*  
Type: `object`

The replacements, where keys are module ids and the corresponding values are the replacements for their require statements.


## License

MIT © [Ben Drucker](http://bendrucker.me)
