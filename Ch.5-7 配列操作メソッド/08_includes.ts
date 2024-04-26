// includesメソッドで要素に特定の値が含まれるか判定
const family: string[] = ["mother", "sister", "me", "father"];
if (family.includes("sister")) {
  //複数要素は検索不可
  console.log("sister included.");
}
