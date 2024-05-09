// 関数の引数と戻り値の型注釈をつける
function scoring(score: number): string {
  if (score >= 80) {
    return "合格";
  } else {
    return "不合格";
  }
}
// 関数に渡して実行
const judge: string = scoring(80); // number型以外を入れるとエラー
console.log(judge);
