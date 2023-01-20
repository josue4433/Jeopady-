document.getElementById("submit-btn").addEventListener("click", onSubmit);
document.getElementById("openUI").addEventListener("click", openUserInterface);

function getRadioValue() {
  var inputs = document.getElementsByName("gameType");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return inputs[i].value;
    }
  }
};

function onSubmit() {
  var selections = ["Questions", "Answers"];
  var selected = getRadioValue();
  if (selected === "Questions") {
    $(document).ready(function() {
      $('td').click(function() {
        $(this).text("question");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-answer');
        $(this).addClass('.display-question');
      });
      $('td').dblclick(function() {
        $(this).text("answer");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-question');
        $(this).addClass('.display-answer');
      });
      $('#UserInterface').delay(100).hide();
      $('#board').delay(100).show();
    });
  } else if (selected === "Answers") {
    $(document).ready(function() {
      $('#gameType-TXT1').css("color", "#000000");
      $('#gameType-TXT2').css("color", "#000000");
      $('td').click(function() {
        $(this).text("answer");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-question');
        $(this).addClass('.display-answer');
      });
      $('#gameType-TXT1').css("color", "#000000");
      $('#gameType-TXT2').css("color", "#000000");
      $('td').dblclick(function() {
        $(this).text("question");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-answer');
        $(this).addClass('.display-question');
      });
      $('#UserInterface').delay(100).hide();
      $('#board').delay(100).show();
    });
  } else {
    alert("ERROR: Unable to identify game type!\n\n TROUBLESHOOT: Select a game type.")
    $('#gameType-TXT1').css("color", "#FF0000");
    $('#gameType-TXT2').css("color", "#FF0000");
    $('td','#UserInterface','#board').stop();
  }
};

function openUserInterface() {
  $('#UserInterface').delay(100).show();
  $('#board').delay(100).hide();
};