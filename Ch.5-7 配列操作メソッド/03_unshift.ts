// unshiftメソッドで先頭に要素を追加
const family: string[] = ["sister", "me", "father"];
// 順番を譲る
family.unshift("grand-mother");
// 配列を確認
console.log(family); //[ 'grand-mother', 'sister', 'me', 'father' ] と出力
