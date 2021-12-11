"use strict ";

const answersList = document.querySelectorAll("ol.answers li");

answersList.forEach((li) => li.addEventListener("click", checkClickedAnswer));

// 正しい答え
const correctAnswers = {
  question1: "B",
  question2: "C",
  question3: "C",
  question4: "B",
};

function checkClickedAnswer(event) {
  //  クリックされた要素のliタグ
  const clickedAnswerElement = event.currentTarget;
  // 選択した答え(A, B, C, D)
  const selectedAnswer = clickedAnswerElement.dataset.answer;

  const questionId = clickedAnswerElement.closest("ol.answers").dataset.id;
  // 正しい答え(A, B, C, D)
  const correctAnswer = correctAnswers[questionId];

  // メッセージを入れる変数を用意
  let message;
  // カラーコードを入れる変数を用意
  let answerColorCode;

  // 答えが正しいか判定
  if (selectedAnswer === correctAnswer) {
    //正しい答えだった時
    message = "正解です！おめでとうなんにもでんけど";
    answerColorCode = "";
  } else {
    // 間違った答えだった時
    message = "ざんねん、間違っちゃったね(^.^)";
    answerColorCode = "#f05959";
  }

  alert(message);
  // 表示色を変更(間違った時だけ色が変わる)
  document.querySelector("span#correct-answer").style.color = answerColorCode;
  // 答え全体を表示
  document.querySelector("div#section-correct-answer").style.display = "block";
}
