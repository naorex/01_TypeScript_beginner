// someメソッドで少なくとも1つ以上の要素が判定に合格するかどうかをboolean型で返る
const score = [65, 70, 90, 85];
const x = score.some(function (e) {
    // 80点以上があるかどうか判定する
    // eにscoreの要素がひとつずつ順番に代入され、80以上かどうか判定され、true|false が返される
    // 配列にひとつでも80を超える要素があれば xはtrueとなる。（xはboolean型である必要あり。）
    return e >= 80;
});
console.log(x);
// 一つも条件に合わない場合はfalseが返される
const score2 = [65, 70, 50, 75];
const x2 = score2.some(function (e) {
    return e >= 80;
});
console.log(x2);
