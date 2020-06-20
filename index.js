import './style.css'

function addUpToLoop(n) {
  const total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
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

timeCalc(1000, addUpToLoop);

const array = [0.95,1.56,2,3,4]
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
const res = onlyElementsAtEvenIndex(array)
console.log(res)