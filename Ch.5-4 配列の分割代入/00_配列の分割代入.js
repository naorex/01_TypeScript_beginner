// 分割代入とは、配列のようなデータ構造の一部を
// 別の変数へ代入する方法
const x = [1, 2, 3, 4, 5];
let [y, z] = x; //xの配列の先頭二つがyとzに代入される
// 以下の記述と同じ結果
let y2 = x[0];
let z2 = x[1];
// 2変数の変換
// 分割代入により、2つの変数の交換を簡単に記述可能
// (分割代入を使わない場合、a,bを一時的に受け止めるための別の変数を用意する必要あり)
let a = 1;
let b = 2;
[a, b] = [b, a]; //aに2が代入され、bに1が代入される
// 途中の要素の分割代入
// 途中の要素を抜き出すには、コンマで記述
let [, , a2, , b2] = x; //a=3, b=5 と同じ
// 分割される側の最後の変数に...を付けると、残りの要素をすべて代入（残余引数, rest parameters）
let [a3, ...b3] = x;
console.log(a3); //a=1と同じ
console.log(b3); //b=[2,3,4,5]と同じ
// 存在しない要素はundefinedになる
let [, , , , , a4] = x;
console.log(a4);
