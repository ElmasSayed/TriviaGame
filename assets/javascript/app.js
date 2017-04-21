

$( document ).ready(function() {

  var corrects = 0;
  var wrongs = 0;
  $("#questionpage").hide();
  
  /*on click event of start*/
  $("#start").click(function(){
      $("#start").hide();
      $("#questionpage").show();
      var timer = $("#timer");
      var counter = 120;
      var interval = setInterval(function() {
                        // Display 'counter' wherever you want to display it.
                        timer.text(counter);
                        counter--;
                        if (counter < 0) {
                          clearInterval(interval);
                          endgame();
                        }
                      }
                      , 1000);
  });


  /*Submit function*/
  $("#submit").click(function(){
    endgame();
  });

//Game end function
function endgame(){
  corrects = 0;
    wrongs = 0;

    for(var i=1; i<=10; i++){
      if($('#ans' + i).is(':checked')) {
        corrects = corrects + 1;
      }
      else{
        wrongs = wrongs + 1
      }
    }

    // alert('corrects: ' + corrects + '\nwrongs: ' + wrongs);
   $("#questionpage").hide();
    $("#resultpage").show();
    $("#start").hide();
    $("#correctanswers").text("Correct Answers: " + corrects);
    $("#wronganswers").text("Wrong Answers: " + wrongs);

}

});


