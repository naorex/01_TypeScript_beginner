enum DayOfWeek {
  Sun,
  Mon,
  TUe,
  Wed,
  Thu,
  Fri,
  Sat,
}

// 1. 列挙型を使った場合
let day;
day === DayOfWeek.Sun;
console.log(day);
// 2. 使わない場合
day === 0;
console.log(day);
