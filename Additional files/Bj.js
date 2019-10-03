
let hand = 0;
let max = 21;
var ending = 1
var newcard;
var cpuhand = 0;

function anot(){

    if (hand > 21){
      console.log("You bust!")
    }
    else if (hand == 0){

    }
    else if(ending == 3){
      console.log("\n\nYour final result is " + (hand))
      console.log("\nComputer's result was " + (cpuhand))

      if(hand < 22 && cpuhand > 21 && hand > cpuhand){
        console.log("\n\n\nYou win!")
      }
      else if(hand < 22 && hand > cpuhand){
        console.log("\n\n\nYou win!")
      }
      else if(hand == cpuhand){
        console.log("\n\n\nIt's a tie!")
      }
      else {
        console.log("\n\n\nYou lose!")
      }
      return;
    }

    //although 11 is the highest value in BlackJack
    //the 12 will represent the Ace card

    //Player's Hand
    newcard = Math.floor((Math.random() * 12) + 1);
    hand += newcard;
    //computer's hand
    newcpucard = Math.floor((Math.random() * 12) + 1);
    cpuhand += newcpucard;


    console.log("Current Hand:", hand)

    console.log("Computer's Hand:", cpuhand)
    if (hand > 21){
      alert("You bust!")
      console.log("Refresh to play again!")
    }
    else if(cpuhand > 21){
      alert("The computer busts! You win!")
      console.log("Refresh to play again!")
    }


}
function stop(){
  ending = 3;
  anot();
}

/*function cpu(){
  newcard = Math.floor((Math.random() * 12) + 1);
  cpuhand += newcard;

  console.log("Computer's Hand:", cpuhand)
  return cpuhand;
}*/
