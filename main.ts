

let s 


interface  t1 {
  c:number,
  // [propsName: string]: any
}
let z =  s as any as t1 & {b:string}
z = {
  a:'123',
  b:'zzz',
  c:'zzz',
  d:'zzz'
}