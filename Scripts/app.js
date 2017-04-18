/*
File: app.js
Author: Asim Habib
Website: Asim Habib Portfolio
File Description: This file includes all the Javascript code for the web application
*/

/*============================================
Capture the form values and print it into the console
==============================================*/
(function () { // Beginning of the IIFE
    
    let contactName = document.getElementById("contactName");
    let ContactNumber = document.getElementById("ContactNumber");
    let Email = document.getElementById("Email");
    let Message = document.getElementById("Message");
    let SendButton = document.getElementById("SendButton");      
    
     SendButton.addEventListener("click", function(e){
      e.preventDefault();
       // alert(contactName.value); 
        console.log(contactName.value);
        console.log(ContactNumber.value);
        console.log(Email.value);
        console.log(Message.value);
    });
})(); // end of the IIFE

/* JQuery Funstion Starts */
$(document).ready(function() {
/*============================================
Backstretch Images
==============================================*/
	//$('.jumbotron').backstretch();
    //to load from a url that can accept a resolution and provide the best image for that resolution
    $(".jumbotron").backstretch([
     "Assets/ah3.jpg?width={width}&height={height}",
   
  ]);

   $("#main-footer").backstretch([
    "Assets/backgrounds-texture-01-1920x589.jpg?width={width}&height={height}",
  ]);

/*============================================
ScrollTo Links -- Scroll to section
==============================================*/
$('a.scrollto').click(function(e){
    $('html,body').scrollTo(this.hash, this.hash, {gap:{y:-80}});
    e.preventDefault();

    if ($('.navbar-collapse').hasClass('in')){
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
});

/*============================================
Navigation Functions
==============================================*/
if ($(window).scrollTop()===0){
    $('#main-nav').removeClass('scrolled');
}
else{
    $('#main-nav').addClass('scrolled');    
}

$(window).scroll(function(){
    if ($(window).scrollTop()===0){
        $('#main-nav').removeClass('scrolled');
    }
    else{
        $('#main-nav').addClass('scrolled');    
    }
});
}); /*End of main JQuery document.ready function*/