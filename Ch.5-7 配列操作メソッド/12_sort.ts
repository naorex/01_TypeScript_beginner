// sortメソッドで、比較関数が返す値に応じて配列要素を並べ替える
const score: number[] = [65, 70, 90, 85];
score.sort(function (a, b) {
  // 点数が高い順にソート
  return b - a;
});
console.log(score); // [90,85,70,65]を返す
