// 関数に複数のデータを渡す

// (1)引数をカンマで区切る
function mixer(a, b) {
  return a + "と" + b + "のジュース";
}
// ミックスジュースを作る
const mixJuice: string = mixer("りんご", "melon");
console.log(mixJuice); // りんごとmelonのジュース

// (2)データを配列に詰め込んで渡す
function mixer2(x) {
  return x.join("と") + "のジュース";
}
// 材料を詰め込むための配列
let material: string[] = []; //空の配列
material.push("ケール");
material.push("大麦若葉");
material.push("モロヘイヤ");

// 材料を関数に渡して実行
const greenJuice: string = mixer2(material);
console.log(greenJuice); //青汁の完成

// (3)残余引数を使う
// 最後の引数に...をつけると、残りの引数がすべて配列に詰められて返される（残余引数）
function mixer3(a, ...x) {
  let juice: string = a;
  if (x.length > 0) {
    juice += "と" + x.join("と");
  }
  juice += "のジュース";
  return juice;
}
// 材料を関数に渡して実行
const mixJuice2: string = mixer3(material);
console.log(mixJuice2); //青汁の完成
