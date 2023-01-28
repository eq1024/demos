type z = number | string;
let k: z[] = [1, 2, 3, '我'];

class App {
  static a = 1;
}

console.log(App.a);

type ss = (({ id: number } & { name: string }) | { id: number }) & { name: number };

let s: ss = { 
  id: 123,
  name: '',
};
