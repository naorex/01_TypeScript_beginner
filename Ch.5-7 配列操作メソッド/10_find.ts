// findメソッドで、配列の各要素をチェックして判定に合格した最初の要素を返す。
const score: number[] = [65, 70, 90, 85];
const x: number | undefined = score.find(function (e) {
  // 80点以上の要素があれば、最初の1個を取り出す
  return e >= 80;
});
console.log(x); // 90を返す

const score2: number[] = [65, 70, 60, 55];
const x2: number | undefined = score2.find(function (e) {
  // 合格する要素が無ければ undefined を返す
  return e >= 80;
});
console.log(x2); // undefined を返す
