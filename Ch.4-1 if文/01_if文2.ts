// 分岐の中に分岐を入れる
let color = "YELLOW";
if (color == "RED") {
  console.log(color);
} else {
  if (color == "GREEN") {
    console.log(color);
  } else {
    console.log("ERROR!!");
  }
}

// 三項演算子(if else 文の短縮形)
let a: number = 7;
let b: string = "";
// aが7だったらbにラッキーを代入、そうでなければアンラッキーを代入
a === 7 ? (b = "ラッキー") : (b = "アンラッキー");

// 例：うるう年の判定処理
let isLeapYear: boolean =
  2024 % 400 === 0 ? true : 2024 % 4 === 0 && 2024 % 100 !== 0;
