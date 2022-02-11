// Task 1

const MyPromise = class {

    constructor (callback) {
        this.promise = new Promise (callback)
    }

    then (fn) {
        this.promise.then(fn); 
        return this
    }

    synchThen (fn) {
        fn();
        return this
    }
  }
  
  const promise = new MyPromise((resolve) => {
    console.log(1)
    resolve()
  }).synchThen(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  })
  console.log(4)

  // Task 2

  class ReversePromise extends Promise {
      
    constructor(fn) {
      super(_ => _());
      this.fn = fn;
      this.stack = [];
    }

    then(fn) {
      this.stack.push(fn);
      return this;
    }
  
    
    run() {
      const p = new Promise(this.fn);
      let current = p;
  
      while (this.stack.length) {
        current = current.then(this.stack.pop());
      }
  
      return p;
    }
  }

  const revP = (new ReversePromise(res =>  {
    console.log(1); res();}))
    .then(_ => console.log(2))
    .then(_ => console.log(3))
    .then(_ => console.log(4)).run();