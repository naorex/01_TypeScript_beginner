// number型（数値型）
120; // 整数
0.5; // 小数
999999999; //アンダースコアを付けてもOK
// bigint型（長整数型）
let n = 1;
2n ** 53n; // 2の53乗
100 + 1; // 整数型にそろえて計算
100n + 1n; // 長整数型にそろえて計算
// string型（文字列型）
("TypeScript");
("I'm happy"); // -> I'm happy
const rainy = "雨";
console.log(`今日は${rainy}です`); // back quate(`)で囲む
// boolean型（論理型）   [注意] Boolean型とは似ているが異なるもの
const isSunny = true; // 晴天ならtrue
const isRainy = false; // 雨天ならfalse
// もし晴天なら買い物にいく
if (isSunny) {
    // 買い物に行く処理
}
// もしも雨天なら自宅でくつろぐ
if (isRainy) {
    // 読書する処理
}
// null型、undefined型
let color;
console.log(color); // undefined
// const form = document.querySelector("#form");
// console.log(form); // null
// symbol型
// 毎回異なる値を生成する関数 Symbol()
const a = Symbol();
console.log(a);
const b = Symbol();
console.log(b);
// （使用例）appleオブジェクトの例
const color2 = Symbol();
const apple = {
    [color2]: "red", // シンボル値colorのプロパティ
};
// appleオブジェクトの色を取得
console.log(apple[color2]); // red
