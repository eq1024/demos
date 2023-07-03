总共三条命令
```js
  "scripts": {
    "dev": "cross-env mode=dev webpack",
    "stage": "cross-env mode=stage webpack",
    "build": "cross-env mode=build webpack"
  },
  ```
  通过命令行中的`mode`控制加载的`.env`文件,在*webpack.config.js*中通过`process.env.mode`获取设置的变量,从而加载不同的配置文件

