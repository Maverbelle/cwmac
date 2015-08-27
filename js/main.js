$( document ).ready(function() {
  $('.photo').each(assignFlicker);
});

function getRandom(){
  var ranNum= Math.floor(Math.random()*2000);
  return(ranNum)
};

function assignFlicker(){
  var delay = getRandom();
  var that = this;
  setTimeout(function(){
    $(that).toggleClass('flicker');
  },delay);
}


// var arr = [];
// for (var i=0, t=11; i<t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }
// console.log(arr);

// for (i=0; i<12; i++) {
//   var rando=Math.floor(Math.random()*11);
//   console.log(rando)
// }

// for (q=0; q<12; q++) {
//   var delay=Math.random()*2000;
  // console.log(delay)
// }

// var photoArray = new Array();
// $("article.Photo").each(function(){
//   photoArray.push(this.id);
// });

// $( ".click" ).click(function() {
// $(".photo").each(function() {
//   $( this ).toggleClass( "example" );
//   });
// });

// setTimeout(function(){
//   $(".photo").toggleClass('flicker');
// }, delay);


//
//
//   console.log(setTimeout());
//
