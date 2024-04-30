// mapメソッドで、配列の各要素に1回ずつ加工用の関数を渡す
const score: number[] = [65, 70, 90, 85]; // 平均77.5
const x: number[] = score.map(function (e) {
  // 平均点との差を求める
  return e - 77.5;
});
console.log(x); // [平均点との差の配列を返す]
