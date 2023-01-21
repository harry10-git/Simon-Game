
var buttonColors= ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern =[];


var level=0;
var randomNumber;


function nextSequence()
{
    // create empty sequence every time
    userClickedPattern = [];

    randomNumber = Math.floor(Math.random() * 4); 
    var randomChooseColor = buttonColors[randomNumber];
    gamePattern.push(randomChooseColor);

    console.log(gamePattern);


    animatePress(randomChooseColor);
    playSound(randomChooseColor);

    $("h1").text("Level "+level)
    level++;

}

$(".btn").click(function(e)
{
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    animatePress(userChosenColour);

    console.log(userClickedPattern);
    
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

    // nextSequence();

    
});



function playSound(name)
{
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColor)
{
    // $("#"+currentColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);

}


    $("body").keypress(function() {

        if(level==0){$("h1").text("Level "+level);
        nextSequence();
}
      });


// Check answer function
      
      function checkAnswer(currentLevel)
      {
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
        {
            console.log("Success");
            //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

        }
        else
        {
            console.log("Not");
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
            $("body").addClass("game-over");

            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 1000);

              $("h1").text("Game Over... Press any Key to Restart");


              startover();
        }        
      }


      // Restart Game
      function startover()
      {
        level =0;
        gamePattern = [];
      }






