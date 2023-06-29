$(document).ready(function(){

  
  var buttonColours = ["red", "blue", "green", "yellow"];

  var gamePattern = [];
  var userClickedPattern = [];
  var level=0;
  
  function nextSequence() {
  userClickedPattern=[];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
  console.log(3);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColour);
    
    if(gamePattern.length==1){
      $("h1").html("level 1");
    }
    
    console.log(userClickedPattern.length);
    
    
  }
  
 
  function Working(){
    
      var count=0;
      console.log(count);
      for(var i = 0; i<gamePattern.length;i++){
            if(gamePattern[i]===userClickedPattern[i]){
              count=count+1;
            }
           
      }
      
      console.log(userClickedPattern.length);
      console.log(gamePattern.length);
      if(gamePattern.length===userClickedPattern.length){
      if(count===gamePattern.length){
        console.log(count);
        level=level+1;
          
          $("h1").html("level "+level);
          
         setTimeout(() => {
          nextSequence();
         }, 1000);
        
        }
       
       
      }
      
    
    
  }
  // console.log(gamePattern);
  $(".btn").click(function (){
    $(this).addClass("pressed");
    setTimeout(() => {
      $(this).removeClass("pressed");
    }, 100);

   
      var userChoosencolor = $(this).attr("id");
      userClickedPattern.push(userChoosencolor);
    
      playSound(userChoosencolor);

      console.log (userClickedPattern);
      if(gamePattern.length<userClickedPattern.length){
        console.log("dfdf");
        $("h1").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        playSound("wrong");
        
          setTimeout(() => {
           
            $("body").removeClass("game-over");
          },100);   
          $(document).keypress(function(event){
              location.reload();
          });
       }
      for(var i=0;i<userClickedPattern.length;i++){
        console.log(userClickedPattern[i]);
        console.log(gamePattern[i]);
        if(userClickedPattern[i]!=gamePattern[i]){
          console.log("check");
          $("h1").html("Game Over, Press Any Key to Restart");
          $("body").addClass("game-over");
          playSound("wrong");
          setTimeout(() => {
           
            $("body").removeClass("game-over");
          },100);     
          $(document).keypress(function(event){
            location.reload();
        });
         
        }
      }
        
      Working();
      
    });


  //2. Create a new function called playSound() that takes a single input parameter called name.
  function playSound(name) {
  
    //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  $(document).keypress(function(event){
    if(level===0){
      level=1;
      
    nextSequence();}
    
    });
// var k=1;
    // while(k>0){
    //   nextSequence();
    //   if(Working()===true){
    //     level++;
    //     $("h1").html("level "+level);
    //   }
    //   else{
    //     break;
    //   }
    // }

   
    
  
// console.log(gamePattern);
// console.log(userClickedPattern);



});
