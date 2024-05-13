// 引数の分割代入
function addition([a, b]) {
    //aに入力配列の[0], bに入力配列の[1]が代入される
    console.log(a + b); // a=1, b=10
}
addition([1, 10, 100]); // 1+10=11。100は無視
// 途中の要素の分割代入
function addition2([a, , b]) {
    console.log(a + b); // a=1, b=100
}
addition2([1, 10, 100]); // 1+100=101。10は無視
