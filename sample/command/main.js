// 材料を入れたらジュースを作る関数
function mixer(materials) {
    // ジュースの種類
    let drink_type = "ジュース";
    // もし材料にケールと大麦若葉が含まれていたら青汁と判定
    if (materials.indexOf("ケール") >= 0 && materials.indexOf("大麦若葉") >= 0) {
        drink_type = "青汁";
    }
    // 材料とジュースの種類を返す
    return materials.join("と") + "の" + drink_type;
}
// 材料を投入して関数を実行
const juice = mixer(["りんご", "ミルク", "砂糖"]);
// できたジュースをコンソールに出力
console.log(juice);
