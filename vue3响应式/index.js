const obj = {
  a: 100,
  b: 200,
  info: {
    age: 24
  }
}

  function reactive(target = {}) {
    if (typeof target !== 'object' || target == null) {
      return target  //不是复杂类型,直接返回了
    }
    const proxyConf = {
      get(target, key, receiver) {
        console.log("get:", key);
        const result = Reflect.get(target, key, receiver)
        return reactive(result)  //惰性递归
      },
      set(target, key, value, receiver) {
        console.log("set:", key);
      },
    }

    const proxy = new Proxy(target, proxyConf)
    return proxy
  }

const pobj = reactive(obj)

// console.log(pobj.a);
console.log(pobj.info);
// console.log(pobj.info.age);