// 任意のデータ型を受け入れるany型
function scoring(score) {
    if (score >= 80) {
        return "合格";
    }
    else {
        return "不合格";
    }
}
console.log(scoring(90)); // 合格
console.log(scoring("90")); // 合格
console.log(scoring("90点")); // 不合格
