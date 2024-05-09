// 関数の基本
function mixer(fruits) {
    return fruits + "ジュース";
}
// 関数を実行
const juice = mixer("りんご");
console.log(juice); // りんごジュースと出力
// 引数を変数や式で渡す
let apple = "りんご";
const juice2 = mixer(apple);
console.log(juice2); // りんごジュースと出力
// 式の計算結果を渡す
const juice3 = mixer("り" + "ん" + "ご");
console.log(juice3); // りんごジュースと出力
