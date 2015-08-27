// function getRandom()
// {
//   var ranNum= Math.floor(Math.random()*11);
//   return(ranNum);
// }




for (i=0; i<12; i++) {
  var rando=Math.floor(Math.random()*11);
  console.log(rando)
}

$( document ).ready(function() {
  $(".photo").toggleClass('flicker');
  });
