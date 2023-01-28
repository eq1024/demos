async function as() {
  let a = await Promise.resolve(1); // let a = yield Promise.resolve(1)
  console.log(a);
}
as().then((res) => {
  console.log(res);
});

function f(ct) {
  console.log(arguments instanceof Array);
  console.log(Array.from(arguments));
  console.log(ct, arguments, Array.prototype.slice.call(arguments, 1));
}

f('ds', 2, 3, 4,[5,6,7]);
