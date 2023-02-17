class myPromise {
  constructor(func) {
    this.status = 'PENDING';
    this.result = undefined;
    this.reason = undefined;
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];
    const resolve = (result) => {
      this.status = 'SUCCESS';
      this.result = result;
      this.onResolvedCallbacks.forEach((fn) => fn());
    };
    const reject = (reason) => {
      this.status = 'FAIL';
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fn) => fn());
    };
    func(resolve, reject);
  }
  then(onResolve, onReject) {
    const thenPromise = new myPromise((res, rej) => {
      const resolvePromise = (callBackValue) => {
        /**
 * queueMicrotask(()=>{})是创建委任为的方案
 * 此处注意,我们可以使用setTimeout或者queueMicrotask来延迟,即不要同步执行,而是给thenPromise初始化的一个时间
 * 否则会出现   ReferenceError: Cannot access 'thenPromise' before initialization
 * 代码复现
 * const resolvePromise = (callBackValue) => {
   try {
      console.log('callBackValue,thenPromise', callBackValue, thenPromise);
      if (callBackValue === thenPromise) {  //此处thenpromise会报错
        throw Error('不能返回自身!');
      }
      if (callBackValue instanceof myPromise) {
        callBackValue.then(res, rej);
      } else {
        res(callBackValue);
      }
    } catch (err) {
      rej(err);
      throw new Error(err);
    }
 */

        queueMicrotask(() => {
          try {
            if (callBackValue === thenPromise) {
              throw Error('不能返回自身!');
            }
            if (callBackValue instanceof myPromise) {
              callBackValue.then(res, rej);
            } else {
              res(callBackValue);
            }
          } catch (err) {
            rej(err);
            throw new Error(err);
          }
        });
      };
      if (this.status === 'SUCCESS') {
        resolvePromise(onResolve(this.result));
      }
      if (this.status === 'FAIL') {
        resolvePromise(onReject(this.reason));
      }
      if (this.status === 'PENDING') {
        this.onResolvedCallbacks.push(() => {
          resolvePromise(onResolve(this.result));
        });
        this.onRejectedCallbacks.push(() => {
          resolvePromise(onReject(this.reason));
        });
      }
    });
    return thenPromise;
  }
}

const test4 = new myPromise((resolve, reject) => {
  resolve(1000);
})
  .then(
    (res) => {
      console.log(res);
      return 1;
    },
    (err) => console.log(err)
  )
  .then(
    (res) => console.log(res),
    (err) => console.log(err)
  );

console.log(2);

//context表示新的this指向
Function.prototype.myBind = function (context) {
  var _t = this;
  var outArgs = Array.prototype.slice.call(arguments, 1);
  var fn = function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    _t.apply(this instanceof fn ? this : context, outArgs.concat(innerArgs));
  };
  fn.prototype = this.prototype; // 实现原型继承
  return fn;
};

Function.prototype.fbind = function (ctx) {
  const fn = this; //fn表示调用当前函数,也就是需要改变this的函数
  const ags1 = Array.prototype.slice.call(arguments, 1);
  return function fn(ags2) {
    fn.apply(ctx, ags1.concat(ags2));
  };
};
