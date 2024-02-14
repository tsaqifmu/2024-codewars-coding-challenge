const grow = (x) => (result = x.reduce((acc, cur) => acc + cur, 1));

console.log(grow([1, 2, 3, 4]));
