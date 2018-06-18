  

    // $("#bomb").hide();


    // var randomRoom = Math.floor(Math.random() * 5) + 1;

    var alreadyWon = false;

    var boom = new Audio("boom.mp3");

    var applause = new Audio("victory.wav");
    
    boom.volume = 0.4;
    applause.volume = 0.4;

    var randomWire = Math.floor(Math.random() * 3) + 1;

    console.log(randomWire);

    var counter = 120;

    //okay, so how do I do this?  I assign a number value to each button
    //then if random = value of button just pressed, this.id or this.value or whatever,
    //trigger a victory

    function detonate(){
      //change image src to explosion, alt to explosion, and change size?
      $("img").attr({
        "src" : "images/explosion.png",
        "alt" : "explosion"
      });

      //hide cut wire buttons
      $("button").hide();
      $("#time").hide();

      $("p").show();
      boom.play();
    }

    function victory() {
 $("img").attr({
        "src" : "images/victory.png",
        "alt" : "victory",
        "height" : "600px"
      });

      //hide cut wire buttons
      $("button").hide();
      $("#time").hide();
      
      $("p").show();
      alreadyWon = true;
      applause.play();
}

$("p").click(function(){
     location.reload();
});

    setTimeout(bombTimer, 1000 * 120);
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
