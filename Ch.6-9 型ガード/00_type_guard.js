// Union型の引数を受け取る関数を定義。
// string でも number 型でも受け取れる
function order(x) {
    // xが文字列なら「〇〇を注文しました」と出力
    if (typeof x === "string") {
        console.log(x + "を注文しました");
    }
    else if (typeof x === "number") {
        // xが数値だったら「〇〇番のメニューを注文しました」と出力
        console.log(x + "番のメニューを注文しました");
    }
}
const apple = order("りんご");
const first = order(10);
