// 応用問題2
// 九九の表を出力

// 横のループと縦のループを入れ子にする

let line: string = "";
for (let i: number = 1; i <= 9; i++) {
  for (let j: number = 1; j <= 9; j++) {
    line += (i * j).toString().padStart(3); //iの段のj番目
  }
  console.log(line); //iの段を出力
  line = "";
}
