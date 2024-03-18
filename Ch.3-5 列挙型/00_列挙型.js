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
// 1. 列挙型を使った場合
let day;
day === DayOfWeek.Sun;
console.log(day);
// 2. 使わない場合
day === 0;
console.log(day);
