module.exports = function reverse (n) {
  if (n === Math.abs(n)){
    return reverseForPlus(n)
    };
  {return reverseForPlus(-n)
    };
  };
  
  function reverseForPlus(n) {
    let sum = 0;
    for ( let i = n; i > 0; i = Math.trunc(i / 10)) {
      let remainder = i % 10;
      sum = sum * 10 + remainder;
      };
    return sum;
    };

    // console.log(reverse(-190));