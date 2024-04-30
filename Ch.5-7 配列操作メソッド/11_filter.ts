// filterメソッドで、判定に合格した要素だけを含む新しい配列を作成して返す
const score: number[] = [65, 70, 90, 85];
const x: number[] = score.filter(function (e) {
  return e >= 80;
});
console.log(x); // [90,85]を返す
