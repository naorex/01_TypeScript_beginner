// 可変長引数を受け取る関数
function addition(a: number, ...b: number[]) {
  let total: number = a;
  for (const x of b) {
    total += x;
  }
  console.log(total);
}
addition(1); // 1 (a=1, b=[])
addition(1, 2); // 3 (a=1, b=[2])
addition(1, 2, 3, 4, 5); // 15 (a=1, b=[2,3,4,5])

// 残余引数の利用例
// 数値を何個でも合計できる汎用的な関数を定義
function sum(...a: number[]) {
  let total: number = 0;
  for (const x of a) {
    total += x;
  }
  console.log(total);
}
sum(); // 0 (a=[])
sum(1, 2, 3, 4, 5); // 15 (a=[1,2,3,4,5])

const x: number[] = [1, 2];
const y: number[] = [3, 4];
sum(...x, ...y); // 10 (a=[1,2,3,4])
