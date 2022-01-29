player1_name = localStorage.getItem("Player 1");
player2_name = localStorage.getItem("Player 2");
player1_score = 0;
player2_score = 0;

function startup() {
  document.getElementById("player1_name").innerHTML = player1_name + ": " + player1_score + " Points";
  document.getElementById("player2_name").innerHTML = player2_name + ": " + player2_score + " Points";
  document.getElementById("question_player").innerHTML = player1_name + " Should Ask A Question";
  document.getElementById("answer_player").innerHTML = player2_name + " Should Answer The Question";
}

function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;

  actual_answer = parseInt(number1) * parseInt(number2);
  console.log(actual_answer);

  question_number = "<h4 style='font-size:40px;'>" + number1 + " X " + number2 + "</h4>";
  input_box = "<br> Answer: <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
  row = question_number + input_box + check_button;

  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";

  document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
  get_answer = document.getElementById("input_check_box").value;
  console.log(get_answer);

  if (get_answer == actual_answer) {
    if (answer_turn == "player1") {
      alert("Yay! Correct Answer You Get A Point");
      player1_score = player1_score + 1;
      document.getElementById("player1_name").innerHTML = player1_name + ": " + player1_score + " Points";
    } else {
      alert("Yay! Correct Answer You Get A Point");
      player2_score = player2_score + 1;
      document.getElementById("player2_name").innerHTML = player2_name + ": " + player2_score + " Points";
    }
  } else {
    if (answer_turn == "player1") {
      alert("OOPS! Wrong Answer You Lost A Point!");
      player1_score = player1_score - 1;
      document.getElementById("player1_name").innerHTML = player1_name + ": " + player1_score + " Points";
    } else {
      alert("OOPS! Wrong Answer You Lost A Point!");
      player2_score = player2_score - 1;
      document.getElementById("player2_name").innerHTML = player2_name + ": " + player2_score + " Points";
    }
  }

  if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("question_player").innerHTML = player2_name + " Should Ask The Question?";
  } else {
    question_turn = "player1";
    document.getElementById("question_player").innerHTML = player1_name + " Should Ask The Question?";
  }
  if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("answer_player").innerHTML = player2_name + " Should Answer The Question";
  } else {
    answer_turn = "player1";
    document.getElementById("answer_player").innerHTML = player1_name + " Should Answer The Question";
  }
  document.getElementById("output").innerHTML = "";
}
