$(document).ready(() => {

  class Timer { //timer is name of class
    constructor() { //making the object
      this.seconds = 60 //this is the property
      this.play = false;
      /*this.isOff = true;

      this.setEnabled();*/
    }

    /*setEnabled() {
      document.querySelectorAll('[isenabled]').forEach(btn => {
        btn.setAttribute('isenabled', !this.isOff);
      });
    }*/
    //behavior of timer
    secondsPassed(e) {
      console.log("yea mon time ah move yunno!")
      //inside this function, new variable called minutes

      if (this.play === false) {
        return
      }

      let minutes = Math.round((this.seconds - 30) / 60);
      //now going to add another variable inside function for remaining seconds
      let remainingSeconds = this.seconds % 60;

      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }

      //Output the result in an element with id="number"
      e.innerHTML = minutes + ":" + remainingSeconds

      //once remaining seconds reach none, interval is over, so write some text
      if (this.seconds == 0) {
        clearInterval("number"); //countdown ends and ceases numeric display
        e.innerHTML = 'Buzz!!'; //..and will display the alphabetic display, "Buzz!!"....temporary placeholder....will link to a buzz sound later
      } else {
        this.seconds--; //decrements as long as seconds do not equal zero
      }

    } //end of behavior

    togglePlay() {
      this.play = !this.play //means its false
    }

    startCountDown() {
      this.myTimer = setInterval(() => this.secondsPassed(document.getElementById("number")), 1000) //displays countdown per the number id from html sheet
      /*
       this.isOff = false;
      this.setIsEnabled();
      */
    }

    stopCountdown() {
      clearInterval(this.myTimer);
      /*this.isOff = true;
      this.setIsEnabled();*/
    }
  } //end of class function

  const t = new Timer(); //this is the object or instance

  //on button
  $('.state-1').click(function() {
    $('#number').addClass("on");
    $(".radar-background").show();
  });


  $(".start-resume").click(function() {
    t.togglePlay();
    t.startCountDown(); //calls startCountDown function from above: "startCountDown = () => {}"
    //if paused, then click to resume(make a state for if myVar == -1)

  });
  //pause button
  $('.pause').on('click', function() {
    t.togglePlay();
  });

  //off button

  $('.state-2').click(function() {
    t.stopCountdown();
    $('#number').removeClass("on");
    document.getElementById("number").innerHTML = '888888';
  });

  //stop/reset button

  $('.stop-reset').click(function() {
    if (t.play === true) {
      t.togglePlay();
    } else {
      t.seconds = 60;
      document.getElementById("number")
        .innerHTML = "1:00"
    }
  });




  $(".state-2").click(function() {
    $(".radar-background").hide();
  });

});
