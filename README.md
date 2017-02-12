# react-conditional-attribute

A dead simple utility for conditionally render jsx attributes

# Install

Install with npm or Bower

```shell

    npm install react-conditional-attribute

```
Use with node.js, browserify or webpack:

```javascript
var attr = require('react-conditional-attribute');
var isActive = true;
attr(isActive, 'enable', 'disable'); // => 'enable' 
//the same result with
attr({if: isActive, val: 'enable', else: 'disable'}); // => 'enable' 
```

# Usage

very simple to use 

```javascript 
import React from 'react' 
import ReactDom from 'react-dom'

import atrr from 'react-conditional-attribute';

const Hello = ({isActive}) => (  
    <div className={attr(isActive, 'enabled', 'disabled'); }>hello world.</div>
);

ReactDom.render(<Hello isActive={true} />, document.querySelector('#app'));

```

if you want to render a litte bit complecated condition see below.

```javascript
const Hello = ({isActive}) => (  
    <div someAttribute={attr({if: cond1, val: 'value 1' }, {if: cond2, val: 'value 2' }, {if: cond3, val: 'value 3' }, {if: cond4, val: 'value 4' })}>hello world.</div>
);

```
``attr`` function would return the first matched ``if`` condtion or the first value in ``else`` field if nothing match.


**mote**: you can put as much as conditions that you want, cheers. 

thank for reading & happy coding.

# License

[MIT](https://github.com/minhlucvan/react-conditional-attribute/blob/master/LICENSE). Copyright (c) 2017 Minh Luc van.