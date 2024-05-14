// 引数の分割代入
function addition([a, b]: number[]) {
  //aに入力配列の[0], bに入力配列の[1]が代入される
  console.log(a + b); // a=1, b=10
}
addition([1, 10, 100]); // 1+10=11。100は無視

// 途中の要素の分割代入
function addition2([a, , b]: number[]) {
  console.log(a + b); // a=1, b=100
}
addition2([1, 10, 100]); // 1+100=101。10は無視

// 分割代入のデフォルト引数
function addition3([a = 0, b = 0, c = 0]: number[]) {
  console.log(a + b + c);
}
console.log(addition3([1, 5])); // 6 (a=1,b=5,C=0)
// 注意：すべてがゼロの場合でも、addition3([])のように空の配列を代入する必要あり

// 掛け算関数
function multiple([a = 0, b = 1]: number[] = [0, 0]) {
  console.log(a * b);
}
// 以下の振る舞いをする。ややこしいので注意
console.log(multiple()); // 0 (a=0, b=0)
console.log(multiple([])); // 0 (a=0, b=1)
console.log(multiple([2])); // 2 (a=2, b=1)
console.log(multiple([2, 3])); // 6 (a=2, b=3)
