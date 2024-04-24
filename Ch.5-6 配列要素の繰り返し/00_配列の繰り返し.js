// 配列を意味するArrayオブジェクトが持つ.lengthプロパティを使い、
// for文と組み合わせて配列のすべての要素を取り出して処理する。
const x = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < x.length; i++) {
    // x.length は i<5 でも同意だが、上記の書き方の方が柔軟。
    total += x[i];
}
console.log(total);
// for of 文
// 配列要素を先頭から末尾へ向かって順番に処理する for 構文。
// 型注釈は使えないことに注意。
let total2 = 0;
for (let y of x) {
    total2 += y;
}
console.log(total2);
// forEach 文
// Arrayオブジェクトには全ての要素を繰り返すforEachメソッドが使える
let total3 = 0;
x.forEach(function (e) {
    total += e;
});
console.log(total3);
