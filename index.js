
var player1=prompt("Enter the name of Player 1 : ");
var player1Caps=player1.slice(0,1).toUpperCase();
player1=player1Caps+player1.slice(1, player1.length).toLowerCase();

var player2=prompt("Enter the name of Player 2 : ");
var player2Caps=player2.slice(0,1).toUpperCase();
player2=player2Caps+player2.slice(1, player2.length).toLowerCase();

var player1Score=0;
var player2Score=0;

document.querySelector(".dice1 h4").innerHTML=player1+" : "+player1Score;
document.querySelector(".dice2 h4").innerHTML=player2+" : "+player2Score;



function myFunction(){

    var random_num=Math.floor((Math.random()*6)+1);
    document.querySelector(".dice1-img").setAttribute("src", "images/dice"+random_num+".png");

    var random_num2=Math.floor((Math.random()*6)+1);
    document.querySelector(".dice2-img").setAttribute("src", "images/dice"+random_num2+".png");

    document.querySelector(".dice1 h4").innerHTML= player1 + " : "+player1Score;
    document.querySelector(".dice2 h4").innerHTML= player2 + " : "+player2Score;
    

    if (random_num>random_num2){
        document.querySelector("h1").innerHTML=player1 + " wins! 🚩";
        document.querySelector("button").innerHTML="Roll again";
        player1Score+=1;
        document.querySelector(".dice1 h4").innerHTML= player1 + " : "+player1Score;
        
    }

    else if (random_num<random_num2){
        document.querySelector("h1").innerHTML=player2 + " wins! 🚩";
        document.querySelector("button").innerHTML="Roll again";
        player2Score+=1;
        document.querySelector(".dice2 h4").innerHTML=player2 + " : "+player2Score;
        
    }

    else{
        document.querySelector("button").innerHTML="Restart";
        if (player1Score>player2Score){
            document.querySelector("h1").innerHTML="It's a Draw! Game Over. "+ player1 + " wins! 🚩";
        }
        else if(player2Score>player1Score){
            document.querySelector("h1").innerHTML="It's a Draw! Game Over. "+ player2 + " wins! 🚩";
        }
        else{
            document.querySelector("h1").innerHTML="It's a Draw! Game Over.";
        }
        
        document.querySelector(".dice1 h4").innerHTML=player1 + " : "+player1Score;
        document.querySelector(".dice2 h4").innerHTML=player2 + " : "+player2Score;
        player1Score=0;
        player2Score=0;
    }
    
}