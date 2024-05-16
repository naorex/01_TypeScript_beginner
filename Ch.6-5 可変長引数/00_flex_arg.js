// 可変長引数を受け取る関数
function addition(a, ...b) {
    let total = a;
    for (const x of b) {
        total += x;
    }
    console.log(total);
}
addition(1); // 1 (a=1, b=[])
addition(1, 2); // 3 (a=1, b=[2])
addition(1, 2, 3, 4, 5); // 15 (a=1, b=[2,3,4,5])
// 残余引数の利用例
function sum(...a) {
    let total = 0;
    for (const x of a) {
        total += x;
    }
    console.log(total);
}
sum(); // 0 (a=[])
sum(1, 2, 3, 4, 5); // 15 (a=[1,2,3,4,5])
const x = [1, 2];
const y = [3, 4];
sum(...x, ...y); // 10 (a=[1,2,3,4])
