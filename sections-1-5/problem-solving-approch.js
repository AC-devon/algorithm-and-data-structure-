/* improve problem solving and simplify by the following:
 1. understand the problem
 2. explore concrete examples
 3. break it down
 4. solve/simplify
 5. look back & refactor
 */

// the task:
// create a function that accept a string and return an object of char count key-value pairs
// rules:
// 1. return only Alphanumericals letters
// 2. no special chars / spaces allowd


// candidate question about the task
// what if no value passed inside our function?
// what if the value is invalid?
function charCount(str){
  // create stored object
  let letterObj = {}

  // lowercase the accept value  && remove special char by regex
  let editStr = str.toLowerCase().split(' ').join('').replace(/[^a-z0-9-]/g, '');

  // forloop through our edited string
  for(char of editStr){
    // increase char count inside object or set the key value pair to 1
    letterObj[char] = ++letterObj[char] ||  1
  }

  // return edited object
  return letterObj;
}

let count = charCount('i AM awesome 123!')
console.log(count)