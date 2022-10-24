// This document was generated automatically from the paircodingExercises.org
// Read it from the .org file to get the problem link
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let orangesInrange = 0;
    let applesInrange = 0;
    for(let i = 0; i < apples.length; i++){
        apples[i] = apples[i] + a;
        if(apples[i]>=s && apples[i]<=t){
            applesInrange++;
        }
    }

    for(let i = 0; i < oranges.length; i++){
        oranges[i] = oranges[i] + b;
        if(oranges[i]>=s && oranges[i]<=t){
            orangesInrange++;
        }
    }

    console.log(applesInrange);
    console.log(orangesInrange);
}
