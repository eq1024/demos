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
    if (this.status === 'SUCCESS') {
      onResolve(this.result);
    }
    if (this.status === 'FAIL') {
      onReject(this.reason);
    }
    if (this.status === 'PENDING') {
      this.onResolvedCallbacks.push(() => {
        onResolve(this.result);
      });
      this.onRejectedCallbacks.push(() => {
        onReject(this.reason);
      });
    }
  }
}

const test4 = new myPromise((resolve, reject) => {
  resolve(100);
}).then(
  (res) => {
    console.log(res);
    return 1;
  },
  (err) => console.log(err)
);

console.log(2);
