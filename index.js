const form = document.getElementById('form');
var myQuestions = [
    {
      question: 'Javascript is _________ language.', 
      answers: {
        a: 'Programming',
        b: 'Application',
        c: 'None of These',
        d: 'Scripting'
      },
      correctAnswer: 'd'
    }, {
      question:
        'Which of the following is a valid type of function javascript supports?',
      answers: {
        a: 'named function',
        b: 'anonymous function',
        c: 'both of the above',
        d: 'none of the above'
      },
      correctAnswer: 'c'
    }, {
      question:
        'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
      answers: {
        a: 'getIndex()',
        b: 'location()',
        c: 'indexOf()',
        d: 'getLocation()'
      },
      correctAnswer: 'c'
    }, {
      question: 'Which one of the following is valid data type of JavaScript', 
      answers: {
        a: 'number',
        b: 'void',
        c: 'boolean',
        d: 'nothing'
      },
      correctAnswer: 'c'
    }
  ];

  myQuestions.forEach(function (questionData, index) {
    var soCauDom = document.createElement('h2');
    soCauDom.innerText = "Câu " + (index + 1);
    
    var h2Dom = document.createElement('h3');
    h2Dom.innerText = questionData.question;

    form.appendChild(soCauDom);
    form.appendChild(h2Dom);

    for (const key in questionData.answers) {
      var valueAnswer = questionData.answers[key];
      var inputRadioAnswer = document.createElement('input');
      inputRadioAnswer.setAttribute('type', 'radio');
      inputRadioAnswer.setAttribute('name', 'answer' + index);
      inputRadioAnswer.setAttribute('value', key);

      var labelAnswer = document.createElement('label');
      labelAnswer.innerText = key + '. ' + valueAnswer;
      form.appendChild(inputRadioAnswer);
      form.appendChild(labelAnswer);
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
    }    
  });

  function calScore() {
    var score = 0;
    var radios = document.querySelectorAll('input[type="radio"]:checked');
  
    for (var i = 0; i < radios.length; i++) {
      var questionIndex = parseInt(radios[i].name.replace('answer', ''));
      var userAnswer = radios[i].value;
  
      if (userAnswer === myQuestions[questionIndex].correctAnswer) {
        score++;
      }
    }
  
    var resultDom = document.getElementById('result');
    resultDom.innerHTML = 'Điểm: ' + score + ' trên ' + myQuestions.length;
  }
  



// var button = document.createElement("input");
// button.setAttribute("type", "button");
// button.setAttribute("value", "Nộp bài");
// var count = 0;
// button.onclick = calScore;
// function calScore() {
//   for (let i = 0; i < myQuestions.length; i++) {
//     var check = document.querySelector(`input[type="button"]:checked`);
//     if (check.value == myQuestions[i].correctAnswer) {
//       count++;
//     }
//   }
//   var point = (10 / myQuestions.length) * count;
//   var resultDom = document.getElementById("result");
//   resultDom.innerText = "Điểm của bạn là: " + point;
// }
// form.appendChild(button);