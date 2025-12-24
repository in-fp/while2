var w2 = require('./index')
var i =0;
new w2(() => i < 10)
  .do(() => {
    console.log(i)
    i++
  })
  .end()