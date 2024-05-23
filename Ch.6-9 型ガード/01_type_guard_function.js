// 型ガード関数を定義
function isString(x) {
    return typeof x === "string"; // 文字列型ならtrueを返す
}
function isNumber(x) {
    return typeof x === "number"; // 数値型ならtrueを返す
}
// typeofを置き換え
function order(x) {
    if (isString(x)) {
        x = x.trim();
        console.log(x + "を注文しました");
    }
    else if (isNumber(x)) {
        console.log(x.toString() + "番のメニューを注文しました");
    }
}
