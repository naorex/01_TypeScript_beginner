// 繰り返しを途中で止める
// for 文の場合
const x: number[] = [1, 2, 3, 4, 5];
let total: number = 0;
for (let i: number = 0; i < x.length; i++) {
  total += x[i];

  //終了条件
  if (total >= 10) {
    console.log(total);
    break;
  }
}

// for of 文の場合
let total2: number = 0;
for (let y of x) {
  total2 += y;

  //終了条件
  if (total2 >= 10) {
    console.log(total2);
    break;
  }
}

// forEach構文は途中停止は不可
