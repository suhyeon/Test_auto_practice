const assert = require('assert')

class MyError extends Error{
  constructor(message){
    super(message)
    this.name='MyError'
  }
}

function add(x,y){
  if(x<0 || y<0){
    throw new MyError('음수는 안되요.')
  }
  return x + y
}

assert.equal(add(1,2), 3)

assert.throws(()=>{
  add(-1,2)
},MyError)
assert.throws(()=>{
  add(1,-8)
},MyError)
assert.throws(()=>{
  add(-1,-8)
},MyError)
