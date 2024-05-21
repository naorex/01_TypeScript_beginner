// 従来の関数定義
function hello(message) {
  console.log(message);
}

// 従来の関数式
const hello2 = function (message) {
  console.log(message);
};

// アロー関数
// function の記述を省略し、アロー演算子 => で記述。
const hello3 = (message) => console.log(message);

// アロー関数の型注釈
// 従来の型注釈
function mixer(fruits: string): string {
  return fruits + "ジュース";
}
console.log(mixer("りんご")); // りんごジュース

// 関数式
const mixer2 = (fruits: string) => {
  return fruits + "ジュース";
};
console.log(mixer2("メロン")); // メロンジュース
