// class App {
//   static a = 1;
// }

// console.log(App.a);

// let z = [
//   {
//     id: 1,
//     name: '流程管理',
//     children: [
//       { id: 2, name: '请假流程' },
//       { id: 3, name: '报销流程' },
//       { id: 4, name: '借款流程', children: [{ id: 5, name: '备用金流程' }] },
//     ],
//     id: 6,
//     name: '系统管理',
//     children: [
//       { id: 7, name: '用户管理' },
//       { id: 8, name: '角色管理' },
//     ],
//   },
// ];
// console.log(z);

let o = {
  a: 1,
};

if (o?.b) {
  console.log('存在');
}
