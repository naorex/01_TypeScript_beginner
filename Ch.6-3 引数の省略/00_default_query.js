// デフォルト引数の使用例
function hello(message = "Hello") {
    console.log(message);
}
hello(); // "Hello"
hello("こんにちは"); // "こんにちは"
// デフォルト引数の位置
function mixer(a = "バナナ", b) {
    return a + "と" + b + "のジュース";
}
console.log(mixer(undefined, "りんご")); // バナナとりんごのジュース
const juice = mixer(undefined, "りんご");
console.log(juice); // バナナとりんごのジュース
