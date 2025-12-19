# `while2`
`while2` is a while statement, but 10x and function-oriented. Also, it includes a built-in index value.

## Installation
```bash
$ npm install while2
```

## Usage

To use while2, first import the module. It is recommended to call it `w2`.

```javascript
const w2 = require('while2')
```

For every while2 statement, you will create a new instance of `w2`, as it is a class, and pass a condition. For everything that you want to run while the condition is true, put `.do(...)` and then pass in a function in the parentheses. Always type `.end()`at the end to run the while loop or it won't work

```javascript
const w2 = require('while2')

new w2(true) // equivalent to while (true)
  .do(() => {
    // anything here will run again and again forever
  })
  .end() // this line makes sure that the while loop is ran in the background. if you don't include this nothing will happen
```

### Built-in index

While2 includes an i parameter that will automatically increment every time the do function is run.

```javascript
const w2 = require('while2')

new w2(true)
  .do(i => {
    console.log(i) /* will print 1 2 3 4 5 6 7... */
  })
  .end()
```

### Breaking the loop

While2 includes a `breakLoop` parameter function so that you can break your while loop.

```javascript
const w2 = require('while2')

new w2(true)
  .do((i, breakLoop) => {
    if (i > 3) breakLoop() // prints 0, 1, 2, 3 then stops
    console.log(i)
  })
  .end()
```

## License
No license, do whatever you want