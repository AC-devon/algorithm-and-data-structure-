function addUpTo(n){
  const total;
  for(let i = 0; i < n; i++){
    total += i;
  }
  return total;
}

const t1 = performance.now()
addUpTo(6);
const t2 = performance.now();
console.log(`time elapsed in ${(t2 - t1) / 1000} seconds`)