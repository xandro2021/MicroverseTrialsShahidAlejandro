// This document was generated automatically from the paircodingExercises.org
// Read it from the .org file to get the problem link
function viralAdvertising(n) {
    // Write your code here
  // let cumulative = 0;
  let shared = 5;
  let liked = 0;
  let total = 0;
  // let liked = math.floor(shared)
  // let total += liked;

  for(let i = 0; i < n; i++){
     liked = Math.floor(shared/2)
     total += liked;
    shared = liked*3;
  }
  return total;
  //
}
