// joinメソッドで配列を文字列に変換する
const family: string[] = ["mother", "sister", "me", "father"];
// 配列を文字列に変換する
const member: string = family.join("|"); // 区切り文字として|を追加して文字列型に変換
console.log(member); //mother|sister|me|father と出力
