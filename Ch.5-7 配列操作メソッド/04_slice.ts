// sliceメソッドで配列の範囲を指定してコピー
const family: string[] = ["mother", "sister", "me", "father"];
// ２つ目と３つ目の要素をコピー
const children: string[] = family.slice(1, 3);
console.log(children); // [ 'sister', 'me' ] と出力
