// ==============================
// グローバル変数の初期化

// スタートからの経過時間（ミリ秒）
let TimeCount: number = 0; // スタートボタンを押すと増えていく変数

// 計測状態（計測中:true, 停止中:false）
let isRunning: boolean = false; // タイマーが働いているかどうかを記憶させる変数

// タイマーの識別ID
let timerID: number = 0;

// カウント表示部
const elmCount: HTMLElement = document.querySelector("#count")!;

// スタートボタン
const elmStart: HTMLElement = document.querySelector("#start")!;

// リセットボタン
const elmReset: HTMLElement = document.querySelector("#reset")!;

// ==============================
// グローバル変数の宣言

// ==============================
// イベントハンドラ

// アプリケーション初期化
const onPageLoad = () => {
  // 描画を更新
  updateView();
};

// スタート処理
const onStart = () => {};

// リセット処理
const onReset = () => {};

// ==============================
// イベントハンドラを定義

// ==============================
// イベントリスナー

// ページの読み込み完了イベント
window.addEventListener("load", onPageLoad);

// スタートボタンのクリックイベント
elmStart.addEventListener("click", onStart);

// リセットボタンのクリックイベント
elmReset.addEventListener("click", onReset);

// ==============================
// イベントリスナーを設定

// ==============================
// ユーザー定義関数

// 描画更新
function updateView() {
  /*処理*/
}

// ==============================
// その他の関数
