// Write your JavaScript code here!

const { formSubmission, validateInput } = require("./scriptHelper");

//alert("Here")
window.addEventListener("load", function() {
   //document.getElementById
   //list.style.visibility = "hidden"

   form.addEventListener("submit", function(event) {
        validateInput(formSubmission())
        //formSubmission( document.querySelector("form") )
        return preventDefault()
    });
    
   let thePlanet = "" 
   let listedPlanets = "";
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch() //myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       thePlanet = pickPlanet(listedPlanets) 
      document.getElementById("missionTarget") = addDestinationInfo(thePlanet.name, thePlanet.diameter, thePlanet.star )
       
   })



   
});


/*form.addEventListener("submit", function(event) {
    formSubmission( document.querySelector("form") )

    return preventDefault()
});*/

//form.addEventListener("submit", validateInput( document.querySelector("form")  ))