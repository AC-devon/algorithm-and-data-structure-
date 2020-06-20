// note: determine big o complexity above each fn

// O(n)
function addUpToLoop(n) {
  const total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

//O(1)
function addUpToFormula(n) {
  // zomg wut formula
  return (n * (n + 1)) / 2;
}

// O(n^2)
function addUpNestLoop(n) {
  const total = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= i; j++) {
      total += j;
    }
  }
  return total;
}

function timeCalc(num, cb) {
  const t1 = performance.now();
  const total = cb(num);
  const t2 = performance.now();
  console.log(`time elapsed in ${(t2 - t1) / 1000} seconds`);
}

timeCalc(100, addUpToFormula);

/* conclusion 
  1. time space cannot be a good measurement of efficiency between 2 algorithms since the margin is diffrent between computers/conditions
  2. the big O relay of the amount of operations and not size of N
  3. big O allow us to roughly calculate how the runtime of an algorithm grows as the inputs grow 
  4, eventullay we need to think of best algorithm 
*/
