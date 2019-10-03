var spot = document.getElementsByTagName('td');
var spotArray = [];
var player1 = true;
var player2 = false;
var turn = document.getElementById("turn")
var reset = document.getElementById("reset")
var p1score = document.getElementById("score1")
var p1count = 0
var p2score = document.getElementById("score2")
var p2count = 0
var resetScore = document.getElementById("resetScore")

for (var i = 0; i < spot.length; i++) {
  spotArray.push(spot[i])
}

spotArray[0].addEventListener("click", function(){
  if(spotArray[0].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[0].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[0].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }

  else{
    spotArray[0].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[1].addEventListener("click", function(){
  if(spotArray[1].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[1].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[1].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[1].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[2].addEventListener("click", function(){
  if(spotArray[2].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[2].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[2].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[2].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[3].addEventListener("click", function(){
  if(spotArray[3].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[3].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[3].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[3].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[4].addEventListener("click", function(){
  if(spotArray[4].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[4].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[4].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[4].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[5].addEventListener("click", function(){
  if(spotArray[5].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[5].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[5].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[5].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[6].addEventListener("click", function(){
  if(spotArray[6].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[6].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[6].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[6].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[7].addEventListener("click", function(){
  if(spotArray[7].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[7].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[7].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[7].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})

spotArray[8].addEventListener("click", function(){
  if(spotArray[8].textContent == "X"){
    alert("Spot already taken")
  }
  else if(spotArray[8].textContent == "O"){
    alert("Spot already taken!")
  }
  else if(player1 == true){
      spotArray[8].textContent = "X"
      player1 = false;
      player2 = true;
      turn.textContent = "Player 2's Turn!"
      checkGame()
  }
  else{
    spotArray[8].textContent = "O"
    player1 = true;
    player2 = false;
    turn.textContent = "Player 1's Turn!"
    checkGame()
  }

})
//Player1 Win Conditions
function checkGame(){
  //Topleft to bottomright
  if (spotArray[0].textContent == "X" && spotArray[4].textContent == "X" && spotArray[8].textContent == "X") {
    alert("Player 1 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()

  }
  //Topleft to bottomleft
  else if (spotArray[0].textContent == "X" && spotArray[3].textContent == "X" && spotArray[6].textContent == "X") {
    alert("Player 1 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()
  }
  //Topleft to topright
  else if (spotArray[0].textContent == "X" && spotArray[1].textContent == "X" && spotArray[2].textContent == "X") {
    alert("Player 1 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()
  }
  //Middleleft to middleright
  else if (spotArray[3].textContent == "X" && spotArray[4].textContent == "X" && spotArray[5].textContent == "X") {
    alert("Player 1 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()
  }
  //bottomleft to bottomright
  else if (spotArray[6].textContent == "X" && spotArray[7].textContent == "X" && spotArray[8].textContent == "X") {
    alert("Player 1 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()
  }
  //Middletop to middlebottom
  else if (spotArray[1].textContent == "X" && spotArray[4].textContent == "X" && spotArray[7].textContent == "X") {
    alert("Player 1 Wins!")
    p1score++
    p1score.textContent = p1count
    resetGame()
  }
  //Topright to bottomright
  else if (spotArray[2].textContent == "X" && spotArray[5].textContent == "X" && spotArray[8].textContent == "X") {
    alert("Player 1 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()
  }
  //Topright to bottomleft
  else if (spotArray[2].textContent == "X" && spotArray[4].textContent == "X" && spotArray[6].textContent == "X") {
    alert("Player 2 Wins!")
    p1count++
    p1score.textContent = p1count
    resetGame()
  }

  //player2 Win conditions
  if (spotArray[0].textContent == "O" && spotArray[4].textContent == "O" && spotArray[8].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //Topleft to bottomleft
  else if (spotArray[0].textContent == "O" && spotArray[3].textContent == "O" && spotArray[6].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //Topleft to topright
  else if (spotArray[0].textContent == "O" && spotArray[1].textContent == "O" && spotArray[2].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //Middleleft to middleright
  else if (spotArray[3].textContent == "O" && spotArray[4].textContent == "O" && spotArray[5].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //bottomleft to bottomright
  else if (spotArray[6].textContent == "O" && spotArray[7].textContent == "O" && spotArray[8].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //Middletop to middlebottom
  else if (spotArray[1].textContent == "O" && spotArray[4].textContent == "O" && spotArray[7].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //Topright to bottomright
  else if (spotArray[2].textContent == "O" && spotArray[5].textContent == "O" && spotArray[8].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  //Topright to bottomleft
  else if (spotArray[2].textContent == "O" && spotArray[4].textContent == "O" && spotArray[6].textContent == "O") {
    alert("Player 2 Wins!")
    p2count++
    p2score.textContent = p2count
    resetGame()
  }
  else{
    console.log("No Game yet!")
  }
}

function resetGame(){
  for (var i = 0; i < spotArray.length; i++) {
    spotArray[i].textContent = ""
  }
  turn.textContent = "Player 1's Turn!"
  player1 = true
  player2 = false
}

reset.addEventListener("click", function(){
  for (var i = 0; i < spotArray.length; i++) {
    spotArray[i].textContent = ""
  }
  turn.textContent = "Player 1's Turn!"
  player1 = true
  player2 = false
})

resetScore.addEventListener("click", function(){
  p1count = 0;
  p2count = 0;
  score1.textContent = 0;
  score2.textContent = 0;
})
