// いずれかの型だけを代入可能に制限する
let anyNumber; //number型とbigint型を代入可能とする
anyNumber = 3.14;
console.log(anyNumber);
anyNumber = 30000000n;
console.log(anyNumber);
// 列挙型をユニオン型へ変換する
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sun"] = 0] = "Sun";
    DayOfWeek[DayOfWeek["Mon"] = 1] = "Mon";
    DayOfWeek[DayOfWeek["TUe"] = 2] = "TUe";
    DayOfWeek[DayOfWeek["Wed"] = 3] = "Wed";
    DayOfWeek[DayOfWeek["Thu"] = 4] = "Thu";
    DayOfWeek[DayOfWeek["Fri"] = 5] = "Fri";
    DayOfWeek[DayOfWeek["Sat"] = 6] = "Sat";
})(DayOfWeek || (DayOfWeek = {}));
const oneDay = "Fri";
console.log(oneDay);
