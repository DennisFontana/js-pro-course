// filter
// you need to write a function, which accepts infinite number parameters
// and returns an array, which has the same parameter only once
function filter() {
  // write your solution here
  // do not forget to use es6 syntax
  let result = [];
  for (let i = 0; i < infinitNum.length; i++) {
    if (!result.includes(infinitNum[i])) {
      result.push(infinitNum[i]);
    }
  }
  return result;
}

// Counter

// реализуйте функцию по созданию счётчика

function createCounter(initialValue) {
  // ***
  
 let count = initialValue;

 let objCounter = {
   showValue: () => {
     return count;
   },
   increment: (num = 1) => {
     count += num;
   },
   decrement: (num = 1) => {
       count -= num;
   },
   discard: () => {
     count = initialValue;
   }
 };

 return objCounter;
}

/**
  1.
  const counter = createCounter();
  counter.showValue() --> 0

  counter.increment() --> 1
  counter.increment() --> 2
  counter.increment(3) --> 5

  counter.decrement() --> 4
  counter.increment(3) --> 1
  counter.showValue() --> 1

  counter.discard() --> 0

  2.
  const counter = createCounter(5);
  counter.showValue() --> 5

  counter.increment() --> 6
  counter.increment() --> 7
  counter.increment(7) --> 14

  counter.decrement() --> 13
  counter.increment(3) --> 10
  counter.showValue() --> 10

  counter.discard() --> 5

*/

