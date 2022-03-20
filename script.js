// Write your JavaScript code here!

const { formSubmission, validateInput } = require("./scriptHelper");


window.addEventListener("load", function() {
   //document.getElementById
   //list.style.visibility = "hidden"


    
   let thePlanet = "" 
   let listedPlanets = "";
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       thePlanet = pickPlanet(listedPlanetsResponse);
       addDestinationInfo(document, thePlanet.name, thePlanet.diameter, thePlanet.star, thePlanet.distance, thePlanet.moons, thePlanet.imageUrl); 
   })

   form.addEventListener("submit", function(event) {
        event.preventDefault();
        //formSubmission( document.querySelector("form") )
        let pilot = document.querySelector("input[name=pilotName]");
        let pilotName = pilot.value;
        
        let copilot = document.querySelector("input[name=copilotName]");
        let copilotName = copilot.value;
        

        let fuel = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuel.value;

        let cargo = document.querySelector("input[name=cargoMass]");
        let cargoMass = cargo.value;
        
        formSubmission(document, list,  pilotName, copilotName, fuelLevel, cargoMass)

    });

    

});


/*form.addEventListener("submit", function(event) {
    formSubmission( document.querySelector("form") )

    return preventDefault()
});*/

//form.addEventListener("submit", validateInput( document.querySelector("form")  ))