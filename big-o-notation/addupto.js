function addUpToLoop(n) {
  const total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFormula(n) {
  // zomg wut formula
  return (n * (n + 1)) / 2;
}

function timeCalc(num, cb) {
  const t1 = performance.now();
  const total = cb(num);
  const t2 = performance.now();
  console.log(`time elapsed in ${(t2 - t1) / 1000} seconds`);
}

timeCalc(1000000000, addUpToFormula);

/* conclusion 
  1. time space cannot be a good measurement of efficiency between 2 algorithms since the margin is diffrent between computers/conditions
  2. the big O relay of the amount of operations and not size of N
*/
