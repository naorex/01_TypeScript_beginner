/*==============================
グローバル変数
==============================*/

// スタートからの経過時間（ミリ秒）
let timeCount: number = 0;
// 計測状態（計測中:true、停止中:false）
let isRunning: boolean = false;
// タイマーの識別ID
let timerID: number = 0;
// カウント表示部
const elmCount: HTMLElement = document.querySelector("#count")!;
// スタートボタン
const elmStart: HTMLElement = document.querySelector("#start")!;
// リセットボタン
const elmReset: HTMLElement = document.querySelector("#reset")!;

/*==============================
イベントハンドラ
==============================*/

// アプリケーション初期化
const onPageLoad = () => {
  // 描画を更新
  updateView();
};

// スタート処理
const onStart = () => {
  // 停止中の場合
  if (isRunning === false) {
    // タイマーを起動
    startTimer();
  }
  // 計測中の場合
  else {
    // タイマーを停止
    stopTimer();
  }
};

// リセット処理
const onReset = () => {
  // タイマーを停止
  stopTimer();
  // カウントをリセット
  resetCount();
  // 描画を更新
  updateView();
};

/*==============================
イベントリスナー
==============================*/

// ページの読み込み完了イベント
window.addEventListener("load", onPageLoad);

// スタートボタンのクリックイベント
elmStart.addEventListener("click", onStart);

// リセットボタンのクリックイベント
elmReset.addEventListener("click", onReset);

/*==============================
ユーザー定義関数
==============================*/

// 描画更新
function updateView() {
  // 最大表示時間を超えない制限
  if (timeCount > 60 * 60 * 1000 - 1) {
    timeCount = 60 * 60 * 1000 - 1; // 59:59 99にする
  }
  // 経過時間の「分」を求める
  const mm: string = Math.floor(timeCount / 1000 / 60)
    .toString()
    .padStart(2, "0");
  // 経過時間の「秒」を求める
  const ss: string = (Math.floor(timeCount / 1000) % 60).toString().padStart(2, "0");
  // 経過時間の「ミリ秒」を求める
  const ms: string = (timeCount % 1000).toString().padStart(3, "0").slice(0, 2);
  // 表示する文字列を編集
  const count: string = mm + ":" + ss + " <small>" + ms + "</small>";
  // カウントの表示を更新
  elmCount.innerHTML = count;
}

// 計測スタート
function startTimer() {
  // 指定された時間ごとにカウントを更新
  timerID = setInterval(() => {
    // 経過時間を加算
    timeCount += 10;
    // 描画を更新
    updateView();
  }, 10);
  // 計測状態を「計測中」に変更
  isRunning = true;
}

// 計測ストップ
function stopTimer() {
  // タイマーを停止
  clearInterval(timerID);
  // 計測状態を「停止中」に変更
  isRunning = false;
}

// カウントをリセット
function resetCount() {
  // 経過時間を初期化
  timeCount = 0;
}
