 
 function switchBeeps(){
  if (shouldBeep == true)
  {
    shouldBeep = false;
    $("#muteBeeps").html("<span class='glyphicon glyphicon-volume-up'></span> Unmute Beeps?");
  }
  else
  {
    shouldBeep = true;
    $("#muteBeeps").html("<span class='glyphicon glyphicon-volume-off'></span> Mute Beeps?");
  }
 }

 function loadModal(){
        $('#myModal').removeClass("hide").modal('show');
    }

    // $("#bomb").hide();


    // var randomRoom = Math.floor(Math.random() * 5) + 1;

    var alreadyWon = false;

    var boom = new Audio("boom.mp3");

    var applause = new Audio("victory.wav");

    var beep = new Audio("beep1.wav");
    
    var shouldBeep = true;

    function stopBeep(){
    	shouldBeep = false;
    }

    function startBeep(){
    	shouldBeep = true;
    }

    boom.volume = 0.4;
    applause.volume = 0.4;
    beep.volume = 0.4;

    var randomWire = Math.floor(Math.random() * 3) + 1;

    console.log(randomWire);

    var counter = 59;


 

    //okay, so how do I do this?  I assign a number value to each button
    //then if random = value of button just pressed, this.id or this.value or whatever,
    //trigger a victory

    function detonate(){
    	stopBeep();
      //change image src to explosion, alt to explosion, and change size?
      $("img").hide();


      $("body").css("background", "url('images/explosion.png') no-repeat center center fixed");
      $("body").css("-webkit-background-size", "cover");
      $("body").css("-moz-background-size", "cover");
      $("body").css("-o-background-size", "cover");
      $("body").css("background-size", "cover");

  //     $("body").attr({
  //       "background" : "url('images/explosion.png') no-repeat center center fixed",
  //       "-webkit-background-size" : "cover",
  // "-moz-background-size" : "cover",
  // "-o-background-size" : "cover",
  // "background-size" : "cover"
  //     });


      //hide cut wire buttons
      $("button").hide();
      $("#time").hide();
      $("#timeContainer").hide();
      $("#hint").hide();

      $("p").delay(2500).fadeIn();
      boom.play();
    }

    function victory() {
    	stopBeep();
      $("img").hide();

        $("body").css("background", "url('images/victory.png') no-repeat center center fixed");
      $("body").css("-webkit-background-size", "cover");
      $("body").css("-moz-background-size", "cover");
      $("body").css("-o-background-size", "cover");
      $("body").css("background-size", "cover");

  //      $("body").attr({
  //       "background" : "url('images/victory.png') no-repeat center center fixed",
  //       "-webkit-background-size" : "cover",
  // "-moz-background-size" : "cover",
  // "-o-background-size" : "cover",
  // "background-size" : "cover"
  //     });

      //hide cut wire buttons
      $("button").hide();
      $("#time").hide();
      $("#timeContainer").hide();
      $("#hint").hide();
      
      
      $("p").delay(2500).fadeIn();
    


      alreadyWon = true;
      applause.play();
}

$("p").click(function(){
     location.reload();
});

    setTimeout(bombTimer, 1000 * 59);
    setTimeout(time, 1000 * 1);

    function timeConverter(t){
      var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
    }

    function time(){
      counter--;

      if (shouldBeep === true)
      	{
      		beep.play();
      	}
      

      counterConverted = timeConverter(counter);
      $("#time").text(counterConverted);
       setTimeout(time, 1000 * 1);
    }

    function bombTimer() {
      if (alreadyWon == false)
      {
      alert("Time's up!  Uh-oh!")

  detonate();
}

}




    function cut(buttonId){
      if (buttonId == randomWire)
      {
        alert("Great job!");
        victory();
      }
      else
      {
        alert("Wrong wire!  Uh oh!");
        console.log(buttonId);
        //WHY DOES THIS SHOW UP AS UNDEFINED!?
        detonate();
      }

    

    }
