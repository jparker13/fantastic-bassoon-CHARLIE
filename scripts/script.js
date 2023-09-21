$( document ).ready(function() {
  //click on an image, get a message
 
 $('#happyPupMeme').click(function()
 {
     //OLD CODE
     //console.log("position: ", $('#happyPupMeme').position() );

     //NEW CODE
     $("#divOutput").hide();

   console.log("user clicked happyPupMeme");

   $("#outputMsg").text("You are so cool :)");

   $("#divOutput").toggle();
   });
 })
 
     // OLD CODE
     //$( "#happyPupMeme" ).draggable({
     //stop: function() {
      // if(  $('#happyPupMeme').position().left > 500){
      // alert(" Coding is so cool! ");
      
      // else if( $('#happyPupMeme').position().left > 100 && $('#happyPupMeme').position().left < 500){
      //  alert(" You are so cool! ");
      