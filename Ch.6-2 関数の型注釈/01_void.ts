// 戻り値を返さない関数
// 関数が戻り値を戻さないことを明確にする場合は、
// void型という型注釈をつける

function hello(): void {
  console.log("Hello");
}

let result: void = hello();
