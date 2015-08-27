// function getRandom()
// {
//   var ranNum= Math.floor(Math.random()*11);
//   return(ranNum);
// }


for (i=0; i<12; i++) {
  var rando=Math.floor(Math.random()*11);
  console.log(rando)
}

for (t=0; t<12; t++) {
  var delay=Math.random()*2000;
  // console.log(delay)
}


setTimeout(function(){
  $(".photo").toggleClass('flicker');
}, delay);


//
// $( document ).ready(function() {
//   console.log(setTimeout());
//
//   });
