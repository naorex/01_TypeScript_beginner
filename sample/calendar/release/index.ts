/*==============================
グローバル変数
==============================*/

// 表示中の年月
const currentDate: Date = new Date();
// タイトル表示部
const elmTitle: HTMLElement = document.querySelector(".cal__title")!;
// 前月移動ナビ
const elmPrev: HTMLElement = document.querySelector(".cal__prev")!;
// 翌月移動ナビ
const elmNext: HTMLElement = document.querySelector(".cal__next")!;
// 日付表示部
const elmDays: HTMLElement = document.querySelector(".cal__days")!;

/*==============================
イベントハンドラ
==============================*/

// アプリケーション初期化
const onPageLoad = (): void => {
  // 描画を更新
  updateView(currentDate);
};

// 前月移動処理
const onPrev = (): void => {
  // 前月へ移動
  currentDate.setMonth(currentDate.getMonth() - 1);
  // 描画更新
  updateView(currentDate);
};

// 翌月移動処理
const onNext = (): void => {
  // 翌月へ移動
  currentDate.setMonth(currentDate.getMonth() + 1);
  // 描画更新
  updateView(currentDate);
};

/*==============================
イベントリスナー
==============================*/

// ページの読み込み完了イベント
window.addEventListener("load", onPageLoad);

// 前月移動ナビのクリックイベント
elmPrev.addEventListener("click", onPrev);

// 翌月移動ナビのクリックイベント
elmNext.addEventListener("click", onNext);

/*==============================
ユーザー定義関数
==============================*/

// 描画更新
function updateView(date: Date): void {
  // タイトル表示部の更新
  updateTitle(date);
  // 日付表示部の更新
  updateDays(date);
}

// タイトル表示部の更新
function updateTitle(date: Date): void {
  // タイトルを編集：YYYY年MM月
  const title: string = date.getFullYear().toString() + "年" + (date.getMonth() + 1).toString().padStart(2, "0") + "月";
  // タイトルを更新
  elmTitle.innerHTML = title;
}

// 日付表示部の更新
function updateDays(date: Date): void {
  // ------------------------------------
  // 配列を宣言
  // ------------------------------------

  // セルの日付を格納する配列
  const dateList: number[] = [];
  // セルのclass名を格納する配列
  const classList: string[] = [];

  // ------------------------------------
  // 日付の表示に必要な情報を求める
  // ------------------------------------

  // 当月の日数を求める
  const thisDays: number = getMonthDays(date);
  // 当月の1日より左側に表示する日数を求める
  const prevDays: number = getFirstDayOfWeek(date);
  // 前月の末日を求める
  const prevLastDate: number = getPrevMonthDays(date);
  // 当月の表示に必要な行数を求める
  const rows: number = Math.ceil((thisDays + prevDays) / 7);

  // ------------------------------------
  // セルのデータを配列に格納する
  // ------------------------------------

  // セルの個数だけ繰り返す
  for (let i: number = 0; i < rows * 7; i++) {
    // i番目のセルが前月の場合
    if (i < prevDays) {
      // セルの日付を格納
      dateList.push(prevLastDate - prevDays + 1 + i);
      // セルのclass名を格納
      classList.push("cal__day cal__day--prev");
    }
    // i番目のセルが当月の場合
    else if (prevDays <= i && i < prevDays + thisDays) {
      // セルの日付を格納
      dateList.push(i - prevDays + 1);
      // i番目のセルが日曜日の場合
      if (i % 7 === 0) {
        // セルのクラス名を格納
        classList.push("cal__day cal__day--sun");
      }
      // i番目のセルが土曜日の場合
      else if (i % 7 === 6) {
        // セルのクラス名を格納
        classList.push("cal__day cal__day--sat");
      }
      // i番目のセルが土日以外の場合
      else {
        classList.push("cal__day");
      }
    }
    // i番目のセルが翌月の場合
    else {
      // セルの日付を格納
      dateList.push(i - (prevDays + thisDays) + 1);
      // セルのクラス名を格納
      classList.push("cal__day cal__day--next");
    }
  }

  // ------------------------------------
  // 日付表示部のHTMLを編集する
  // ------------------------------------

  // HTMLを格納する変数
  let html: string = "";

  // セルの個数だけ繰り返す
  for (let i: number = 0; i < rows * 7; i++) {
    // i番目のセルが1列目の場合
    if (i % 7 === 0) {
      // tr開始タグを連結
      html += "<tr>";
    }
    // i番目のセルのHTMLを連結
    html += '<td class="' + classList.shift() + '">' + dateList.shift()?.toString() + "</td>";
    // i番目のセルが7列目の場合
    if (i % 7 === 6) {
      // tr終了タグを連結
      html += "</tr>";
    }
  }

  // 日付表示部のHTMLを更新
  elmDays.innerHTML = html;
}

// 当月の日数を求める関数
function getMonthDays(date: Date): number {
  // 当日の日付オブジェクトを生成
  const lastDay: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // 当月の末日へ移動
  lastDay.setMonth(lastDay.getMonth() + 1);
  lastDay.setDate(0);
  // 当月の日数を計算
  const days: number = lastDay.getDate();
  // 当月の日数を返す
  return days;
}

// 当月の1日の曜日を求める関数
function getFirstDayOfWeek(date: Date): number {
  // 1日の日付オブジェクトを生成
  const firstDay: Date = new Date(date.getFullYear(), date.getMonth(), 1);
  // 1日の曜日を取得
  const day: number = firstDay.getDay();
  // 曜日を返す
  return day;
}

// 前月の日数を求める関数
function getPrevMonthDays(date: Date): number {
  // 前月の日付オブジェクトを生成
  const prevMonth: Date = new Date(date.getFullYear(), date.getMonth() - 1);
  // 前月の日数を取得
  const days: number = getMonthDays(prevMonth);
  // 前月の日数を返す
  return days;
}
