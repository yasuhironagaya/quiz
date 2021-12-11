'use strict ';

const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

function checkClickedAnswer() {
  //答え全体を表示
  document.querySelector('div#section-correct-answer').style.display = 'block';
  document.querySelector('span#correct-answer').style.color ='#f05959';
}



