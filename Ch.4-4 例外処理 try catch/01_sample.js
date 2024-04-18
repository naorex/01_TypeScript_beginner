// 平均点を求める例を try catch で書く
let x = 0;
let y = 1;
try {
    // 変数をチェック
    if (x === 0) {
        throw new Error("受験者数に0が入っています");
    }
    // 平均点を求めて出力
    let avg = y / x;
    console.log("平均点:" + avg);
}
catch (e) {
    //throw から来たエラーをeの変数で受け止める（なんでもよい）
    console.log(e.message); //.messageメソッドでエラー文章を取り出す
}
