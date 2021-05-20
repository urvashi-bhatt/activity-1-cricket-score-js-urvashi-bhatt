(function() {
  'use strict';
  window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
  form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
  event.preventDefault();
  event.stopPropagation();
  }else{
        //function comapretheScore(){
          var team1Name = document.getElementById("team1name").value;
          var team1Score = document.getElementById("team1score").value;
          var team2Name = document.getElementById("team2name").value;
          var team2Score = document.getElementById("team2score").value;
          var resulText, teamresulText;
          if(isNaN(team1Score) || isNaN(team2Score)){
            resulText = "Invalid Input! Score should be number only.";
          }else {
            resulText = "";
          }
          var regex = /^[a-zA-Z]*$/;
          if (regex.test(team1Name) && regex.test(team2Name)) {
              //return true;
              document.getElementById("notification").innerHTML = "";
          } else {
            document.getElementById("notification").innerHTML = "Invalid Input! Team name Fields must me in alphabets only";
              //return false;
          }
          if(team1Name == team2Name){
            teamresulText = "Invalid Input! Both the Team name can not be same";
          }else {
            teamresulText = "";
          }
          document.getElementById("result").innerHTML = resulText;
          document.getElementById("teamresult").innerHTML = teamresulText;
        //}
        event.preventDefault();
        event.stopPropagation();
  }
  form.classList.add('was-validated');
  }, false);
  });

  }, false);
  })();