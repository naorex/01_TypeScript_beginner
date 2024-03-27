// データ型に別名を付ける事が出来る
type Choice = "Yes" | "No";

// 以下のような独自のデータ型が定義できるようになった
let answer: Choice;

// 使用例
type Num = number; // Num は number型と同じと定義
let ranking: Num = 1;
let score: Num = 100;

// ひとつひとつの型宣言が不要となる
type Num2 = number | bigint; // 型の定義を変更

let ranking2: Num2 = 1; // 上記で変えたので、型定義の変更が不要
let score2: Num2 = 100;
const lightSpeed: Num2 = 29979458n;
