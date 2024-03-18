// いずれかの型だけを代入可能に制限する
let anyNumber: number | bigint; //number型とbigint型を代入可能とする
anyNumber = 3.14;
console.log(anyNumber);
anyNumber = 30000000n;
console.log(anyNumber);

// 列挙型をユニオン型へ変換する
enum DayOfWeek {
  Sun,
  Mon,
  TUe,
  Wed,
  Thu,
  Fri,
  Sat,
}

// keyof, typeof を用いてユニオン型に変換
type Week = keyof typeof DayOfWeek;
const oneDay: Week = "Fri";
console.log(oneDay);
