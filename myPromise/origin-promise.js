const p = new Promise((resove, reject) => {
  resove('123');
});
p.then((res) => {
  console.log(res);
})
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  });
