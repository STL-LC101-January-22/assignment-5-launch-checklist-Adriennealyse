// Write your JavaScript code here!

const {  formSubmission,  validateInput  } = require("./scriptHelper")
require = "./scriptHelper";

//const divForm = document.querySelector('.launchForm');
//const form = document.querySelector('form')  
//const form2 = document.getElementById('testForm');



window.addEventListener("load", function(event) {
    event.preventDefault();  // Prevent this form from auto submitting

    list = document.getElementById("faultyItems");
    list.style.visibility = "hidden"
    
   let thePlanet = "" 
   let listedPlanets = "";
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
  
   listedPlanetsResponse.then(function (result) {
       sleep(2)
       listedPlanets = result;
       console.log(listedPlanets);
       console.log('Listed Planets : ' + JSON.stringify(listedPlanets) )
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       thePlanet = pickPlanet(listedPlanets);
       console.log('The Planet ' + thePlanet)
       addDestinationInfo(document, thePlanet.name, thePlanet.diameter, thePlanet.star, thePlanet.distance, thePlanet.moons, thePlanet.image); 
   })

   
   window.addEventListener("submit", function(event) {
       event.preventDefault();  // Prevent this form from auto submitting
       
       //formSubmission( document.querySelector("form") )
       let pilotName = document.querySelector("input[name=pilotName]").value;
       //let pilotName = pilot.value;
       
       let copilotName = document.querySelector("input[name=copilotName]").value;
       //let copilotName = copilot.value;
       
       
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       //let fuelLevel = fuel.value;
       
       let cargoLevel = document.querySelector("input[name=cargoMass]").value;
       //let cargoLevel = cargo.value;
       

       formSubmission(document, list,  pilotName, copilotName, fuelLevel, cargoLevel)
    });

   
});



   


   

    

    




