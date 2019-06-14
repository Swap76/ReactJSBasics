let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let answer = numberArray.map((value,index) => {
  let ans ;
  if (value % 2 === 1) {
    return index * 3;
  } else {
    return index * 2;
  }
});

console.log(answer);


const b = numberArray.filter((value) => value != 4);

console.log(b);

const c = numberArray.filter((value) => value > 4);

console.log(c);


// Output 
/*
[ 0, 2, 6, 6, 12, 10, 18, 14, 24, 18, 30, 22, 36, 26, 42, 30, 48, 34, 54, 38 ]
[ 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
[ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
*/