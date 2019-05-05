$(document).ready(function(){//I need jQuery to run!
 
    var targetNumber = 0;
    var opalNumber = 0;
    var amethystNumber = 0;
    var quartzNumber = 0;
    var topazNumber = 0;
    var wins = 0; 
    var losses = 0; 
    var totalScore = 0;
    
    var resetGame = function(){
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    opalNumber = Math.floor(Math.random()*12)+1;
    amethystNumber = Math.floor(Math.random()*12)+1;
    quartzNumber = Math.floor(Math.random()*12)+1;
    topazNumber = Math.floor(Math.random()*12)+1;
    totalScore = 0;
    
   
                   
    $("#opal").attr('value', opalNumber);
    $("#amethyst").attr('value', amethystNumber);
    $("#quartz").attr('value', quartzNumber);
    $("#topaz").attr('value', topazNumber);
    $(".crystal-number").text(targetNumber);
    $(".crystal-score").text(totalScore);
    
               }
   
    
    resetGame();
   
   
   
    $(".crystal").click(function(){
   
        console.log($(this).attr('value'));
        totalScore += parseInt($(this).attr('value'));
        console.log(totalScore);
        $(".crystal-score").text(totalScore);
   
        if(totalScore ===targetNumber){
            alert("You win!");
            wins++;
           $("#wins").append(wins);
           resetGame();
            
        }else if (totalScore>targetNumber){
            alert("You lose!"); 
            losses++;
            $("#losses").append(losses);
            resetGame();
        }
   
   
    });
   
   
   
   });