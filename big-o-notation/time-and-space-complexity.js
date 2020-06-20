// note: determine big o complexity above each fn

// O(n) in time complexity & O(1) in space complexity
function addUpToLoop(n) {
  const total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

//O(1) in time complexity & O(1) in space complexity
function addUpToFormula(n) {
  // zomg wut formula
  return (n * (n + 1)) / 2;
}

// O(n^2) in time complexity & O(1) in space complexity
function addUpNestLoop(n) {
  const total = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= i; j++) {
      total += j;
    }
  }
  return total;
}

// O(n) in time complexity & O(n) in space complexity
function double(arr) {
  let newArr = [];
  for (let i = 0; j <= arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

function timeCalc(num, cb) {
  const t1 = performance.now();
  const total = cb(num);
  const t2 = performance.now();
  console.log(`time elapsed in ${(t2 - t1) / 1000} seconds`);
}
// TODO - functino the calc the amount of operations (time complexity);
// TODO - functino the calc the amount of constants (space complexity);

timeCalc(100, addUpNestLoop);

/* conclusion 
  // time complexity
  *. time space cannot be a good measurement of efficiency between 2 algorithms since the margin is diffrent between computers/conditions
  *. the big O relay of the amount of operations and not size of N
  *. constants dont matter, 
  means:
   O(20n) = O(m).
   O(50) = O(1).
   O(100^2) = O(n^2).

   // space complexity
  *, most primitives (boolean, numbers, undefined, null) are constant space
  *. string complexity is O(n)
  *. as the amount of constant grow - the space complexity grows
  
  // general
   * big O allow us to roughly calculate how the runtime of an algorithm      grows as the inputs grow - so basically understand the trend
*/
