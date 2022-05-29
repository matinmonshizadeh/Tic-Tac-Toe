var text = 'X';
var answerArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var counter = 0;

$(".status").hide();

$(".btn").on("click", function() {
  location.reload();
});

$(".cell0").one("click", function() {
  $(".cellContent0").text(text).hide();
  $(".cellContent0").fadeIn();
  answerArray[0] = text;
  toggleXO();
  answer();
});

$(".cell1").one("click", function() {
  $(".cellContent1").text(text).hide();
  $(".cellContent1").fadeIn();
  answerArray[1] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell2").one("click", function() {
  $(".cellContent2").text(text).hide();
  $(".cellContent2").fadeIn();
  answerArray[2] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell3").click(function() {
  $(".cellContent3").text(text).hide();
  $(".cellContent3").fadeIn();
  answerArray[3] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell4").one("click", function() {
  $(".cellContent4").text(text).hide();
  $(".cellContent4").fadeIn();
  answerArray[4] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell5").one("click", function() {
  $(".cellContent5").text(text).hide();
  $(".cellContent5").fadeIn();
  answerArray[5] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell6").one("click", function() {
  $(".cellContent6").text(text).hide();
  $(".cellContent6").fadeIn();
  answerArray[6] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell7").one("click", function() {
  $(".cellContent7").text(text).hide();
  $(".cellContent7").fadeIn();
  answerArray[7] = text;
  counter++;
  toggleXO();
  answer();
});

$(".cell8").one("click", function() {
  $(".cellContent8").text(text).hide();
  $(".cellContent8").fadeIn();
  answerArray[8] = text;
  counter++;
  toggleXO();
  answer();
});



function toggleXO() {
  if (text === 'X') {
    return text = 'O';
  } else if (text === 'O') {
    return text = 'X';
  }
}

function answer() {
  if ((answerArray[0] === 'X' && answerArray[1] === 'X' && answerArray[2] === 'X') ||
    (answerArray[3] === 'X' && answerArray[4] === 'X' && answerArray[5] === 'X') ||
    (answerArray[6] === 'X' && answerArray[7] === 'X' && answerArray[8] === 'X') ||
    (answerArray[0] === 'X' && answerArray[4] === 'X' && answerArray[8] === 'X') ||
    (answerArray[2] === 'X' && answerArray[4] === 'X' && answerArray[6] === 'X') ||
    (answerArray[0] === 'X' && answerArray[3] === 'X' && answerArray[6] === 'X') ||
    (answerArray[1] === 'X' && answerArray[4] === 'X' && answerArray[7] === 'X') ||
    (answerArray[2] === 'X' && answerArray[5] === 'X' && answerArray[8] === 'X')) {
    $("h1").fadeOut();
    $("h1").text("X WINNER!").fadeIn();



  } else if ((answerArray[0] === 'O' && answerArray[1] === 'O' && answerArray[2] === 'O') ||
    (answerArray[3] === 'O' && answerArray[4] === 'O' && answerArray[5] === 'O') ||
    (answerArray[6] === 'O' && answerArray[7] === 'O' && answerArray[8] === 'O') ||
    (answerArray[0] === 'O' && answerArray[4] === 'O' && answerArray[8] === 'O') ||
    (answerArray[2] === 'O' && answerArray[4] === 'O' && answerArray[6] === 'O') ||
    (answerArray[0] === 'O' && answerArray[3] === 'O' && answerArray[6] === 'O') ||
    (answerArray[1] === 'O' && answerArray[4] === 'O' && answerArray[7] === 'O') ||
    (answerArray[2] === 'O' && answerArray[5] === 'O' && answerArray[8] === 'O')) {
      $("h1").fadeOut();
      $("h1").text("O WINNER!").fadeIn();

  } else if (counter === 8) {
    $("h1").fadeOut();
    $("h1").text("XO DRAW!").fadeIn();
  }
}
