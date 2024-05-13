// デフォルト引数の使用例
function hello(message: string = "Hello") {
  console.log(message);
}
hello(); // "Hello"
hello("こんにちは"); // "こんにちは"

// デフォルト引数の位置
function mixer(a: string = "バナナ", b: string): string {
  return a + "と" + b + "のジュース";
}
console.log(mixer(undefined, "りんご")); // バナナとりんごのジュース

const juice: string = mixer(undefined, "りんご");
console.log(juice); // バナナとりんごのジュース
