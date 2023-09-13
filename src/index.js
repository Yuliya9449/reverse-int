module.exports = function reverse (n) {
    let res = 0;

    function recursion(n) {
        if (n === 0) return;

        const remainder = n % 10;
        res = res * 10 + remainder;

        recursion(Math.trunc(n / 10));
    }

    recursion(n);

    return Math.abs(res);
  };
