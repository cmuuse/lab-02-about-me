




var rain = prompt ('you think i like rain' );
console.log('cmuuse likes rain', rain);
if(rain == null){
alert('please try again');
}
else if (rain.trim().toLowerCase() == 'yes'){
  alert('you are from Seattle');

}  else if (rain.trim().toLowerCase() == 'no'){
  alert( 'you are from Arizona ');
}else {
  alert('you are from the moon')
}
