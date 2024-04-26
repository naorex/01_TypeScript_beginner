// fillメソッドで複数の要素にまとめて値を設定する
const fruits: string[] = Array(3);
fruits.fill("apple");
console.log(fruits); //[ 'apple', 'apple', 'apple' ]と出力
fruits.fill("peach", 1, 3);
console.log(fruits); //[ 'apple', 'peach', 'peach' ]と出力
