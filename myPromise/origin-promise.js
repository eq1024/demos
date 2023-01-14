const p = new Promise((resove, reject) => {
  resove('123');
});
p.then(
  (res) => {
    console.log(res);
    return 1;
  },
  (rej) => {
    console.log(rej);
  }
)
  .then(
    (res) => {
      console.log('第二次', res);
      return 2;
    },
    (rej) => {
      console.log('第二次', rej);
    }
  )
  .then(
    (res) => {
      console.log('第三次', res);
      return new myPromise((res, rej) => x);
    },
    (rej) => {
      console.log('第三次', rej);
    }
  )

  .then(
    (res) => {
      console.log('第四次', res);
    },
    (rej) => {
      console.log('第四次', rej);
    }
  );
