const breakError = {}

class w2 {
  constructor(condition) {
    if (!this instanceof w2) return new w2()
    this.condition = condition
    this.i = 0
    return this
  }
  do(cb) {
    this.doHandler = cb
    return this
  }
  end() {
    try {
      while (this.condition()) {
        this.doHandler(this.i, () => {
          throw breakError
        }) // pass in the function to break the loop
        this.i += 1
      }
    } catch(err) {
      if (err === breakError) return

      throw err
    }
  }
}



module.exports = w2