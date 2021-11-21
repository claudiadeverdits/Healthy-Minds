
// FRONT PAGE -------------- //

$(".front-page-image1").on('click', function(){
     window.location = "resourcesAndTreatment.html";    
});
$(".front-page-image2").on('click', function(){
     window.location = "howToHelp.html";    
});
$(".front-page-image3").on('click', function(){
     window.location = "educateYourself.html";    
});
$(".front-page-image4").on('click', function(){
     window.location = "aboutUs.html";    
});

// RESOURCES ---------------//
var button = $('.formButton');

button.on("click", redirectToRegion);

function redirectToRegion(){
  var region = $('.regionDropDown').val();

  if(region === 'northeast'){
    window.open("northeast.html");
  }
  else if(region === 'southeast'){
    window.open("southeast.html");
  }
  else if(region === 'midwest'){
    window.open("midwest.html");
  }
  else if(region === 'southwest'){
    window.open("southwest.html");
  }
  else if(region === 'rockyMountains'){
    window.open("rockyMountains.html");
  }
  else if(region === 'pacific'){
    window.open("pacific.html");
  }
}

// --------------------//
