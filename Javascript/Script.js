
//variables set in the index.html file
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// show time function
// creates a new date object and sets the variable today to it
// now today can be used to get the time

function showTime(){
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  // Am or PM
  // determines if am or pm based on the 0-23 value of the hours of today.getHours

  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12 hour format
  // this makes it so it can never be 13 o'clock
  // 11%12 is 11, 12%12 is 0. if there is no remainer it becomes 12 o'clock

  hour = hour % 12 || 12;

  // Output time
  // this code works by using the inner.html element to set the time variable to the specified time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

  setTimeout(showTime, 1000);
}


// add zero to time
function addZero(n){
  return(parseInt(n, 10) < 10 ? '0' : '') + n
}

function dateTime(){
  const dateArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var thisDate = new Date();
  var datePrint;

  if (thisDate.getMonth() == 0){
datePrint = dateArray[0]
  }
  if (thisDate.getMonth() == 1){
datePrint = dateArray[1]
  }
  if (thisDate.getMonth() == 2){
datePrint = dateArray[2]
  }
  if (thisDate.getMonth() == 3){
datePrint = dateArray[3]
  }
  if (thisDate.getMonth() == 4){
datePrint = dateArray[4]
  }
  if (thisDate.getMonth() == 5){
datePrint = dateArray[5]
  }
  if (thisDate.getMonth() == 6){
datePrint = dateArray[6]
  }
  if (thisDate.getMonth() == 7){
datePrint = dateArray[7]
  }
  if (thisDate.getMonth() == 8){
datePrint = dateArray[8]
  }
  if (thisDate.getMonth() == 9){
datePrint = dateArray[9]
  }
  if (thisDate.getMonth() == 10){
datePrint = dateArray[10]
  }
  if (thisDate.getMonth() == 11){
datePrint = dateArray[11]
  }

  var date = (datePrint)+' '+thisDate.getDate() + ' ' + thisDate.getFullYear();

  document.getElementById("date").innerHTML = date;

}

function quotePrint()
  {
    quo1 = "The way to get started is to quit talking and begin doing!  -Walt Disney"
  quo2 = "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty -Winston Churchhill"
random = Math.random();
const quote = random >= 0.5 ? `${quo1}` : `${quo2}`;


console.log(random, quote);
document.getElementById("quoteToday").innerHTML = quote
}


//Run
dateTime();
showTime();
quotePrint();
