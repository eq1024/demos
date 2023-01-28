function* fn() {
  let v1 = yield 1;
  console.log(v1);
  let v2 = yield new Promise((res, rej) => {
    setTimeout(() => {
      res(1000);
    }, 1000);
  });;
  console.log(v2);
  let v3 = yield 3
  console.log(v3);
}
/**基础逻辑,仅支持同步 */
function runIter(fn) {
  let iterator = fn();
  let result = iterator.next();
  function setp() {
    if (!result.done) {
      result = iterator.next(result.value);
      setp();
    }
  }
  setp();
}
// runIter(fn);

function myAsync(g) {
  return function run() {
    let gen = g();
    function next(data) {
      let result = gen.next(data);
      if (result.done) return result.value;
      /**
       * Promise.resolve 会返回一个以给定值解析后的 Promise 对象
       * 如果这个值是一个 promise，那么将返回这个 promise
       *  */
      Promise.resolve(result.value).then((v) => next(v));
    }
    next();
  };
}
let autoFn = myAsync(fn);

autoFn();
