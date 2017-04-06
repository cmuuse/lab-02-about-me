




var rain = prompt ('you think i like rain' );
console.log('cmuuse likes rain', rain);
if(rain == null){
alert('please try again');
}
else if (rain.trim().toLowerCase() == 'yes'){
  alert('you are from Seattle');
//asking the user a question !
}  else if (rain.trim().toLowerCase() == 'no'){
  alert( 'you are from Arizona ');
  //if the user answers no the code will alert ('you are from Arizona')
}else {
  alert('you are from the moon')
}
/*in the if the user answers something else rather that yes/no this massage will
(you are from the moon) */


var seattle = prompt('are you from West seattle');

console.log('you ride watertax', seattle);

if (seattle == null){
   alert('you must be from Portland');
}else if (seattle.trim().toLowerCase() == 'yes'){
    alert('you  will have a long commute every week');
    // seattle = 'rainy city';
} else if (seattle.trim().toLowerCase() == 'no'){
  alert('you are lucky !!')
} else {
  alert('west seattle is amazing neighborhood')
}


var correctNumber = 15;
var notDone = true;

for (var guesses = 3; guesses > 0 && notDone; guesses--){

  var guess = prompt(' whats my fav num?');
  console.log('guess', guess)
   console.log('guesses', guesses)

  if (guess == correctNumber) {
    alert('you got the right number' );
    notDone = false ;
  } else if (guesses === 1){
    alert('you are out of guesses')
  }  else {
    alert('guess again')
  }
}
