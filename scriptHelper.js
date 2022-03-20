// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${thePlanet.name} </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   </img>*/`
}

//. validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.

function validateInput(testInput) {
  //window.addEventListener("load", function() {
    //let form = document.getElementById("testForm");
    button.addEventListener("submit", function(event) {
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
          alert("All fields are required!");
          // stop the form submission
          event.preventDefault();
          return "Empty"

        } else if (typeof(pilotName.value) === Number || typeof(copilotName.value) === Number ) {
          event.preventDefault();
          return "Is a Number"

        } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
          event.preventDefault();
          return "Not a Number"
        }
    });
 //});
}



function formSubmission(document, list,  pilotName, copilotName, fuelLevel, cargoStatus) {
   //validateInput(formField)
   list = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   let fuelStatus = document.getElementById("fuelStatus")
   cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus")

    list.style.visbility = "hidden"
   copilotStatus.textContent = `Copilot ${copilotName} is ready for launch`
   pilotStatus.textContent = `Pilot ${pilotName} is ready to launch`

    
   validateInput() 
    if (fuelLevel.value < 10000) {
      list.style.visiblity = "visible"
      fuelStatus.textContent = "Fuel level too low for launch"
      launchStatus.textContent = "Shuttle not ready for launch"
      launchStatus.style.color = "rgb(199, 37, 78)"
      
    } else if (cargoMass.value > 10000) {
      list.style.visibility = "visible"
      cargoStatus.textContent = "Cargo mass too heavy for launch"
      launchStatus.textContent = "Shuttle not ready for launch"
      launchStatus.style.color = "rgb(199, 37, 78)"
      
    } else {
      list.style.visibility = "visible"
      launchStatus.textContent = "Shuttle is Ready for Launch"
      launchStatus.style.color = "rgb(65, 159, 106)"
      pilotStatus.textContent = "Pilot Blake is ready for launch"
      copilotStatus.textContent = "Co-pilot Chris is ready for launch"
      fuelStatus.textContent = "Fuel level high enough for launch"
      cargoStatus.textContent = "Cargo mass low enough for launch"
    }
      
  

   
    
} 
    
//innerhtml to update list in html
//target retangle on top of screen for destination

async function myFetch() {
  let planetsReturned = "";

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     return response.json() 
  });

    
      //return planetsReturned.json(); 

  return planetsReturned
}

/*window.addEventListener('load', async function(response){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        
        const container = document.getElementById("container")
        let astronauts = ""
        
        for (astronaut of json) {
            astronauts += `<div class="astronaut">
            <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
            <li>${astronaut.hoursInSpace}</li>
            <li>${astronaut.active}</li>
            <li>${astronaut.skills}</li>
            </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>`
        }
        
        container.innerHTML = astronauts
    })
})*/



function pickPlanet(planets) {

  let planetSelector = Math.floor(Math.random() * (planets.length));
    
  return planets[planetSelector].text
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
