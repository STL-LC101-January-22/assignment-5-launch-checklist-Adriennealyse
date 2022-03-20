// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerText =
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   </img>`
}

//. validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
    } else if (isNaN(testInput) === false ) {
      return "Is a Number";
    } else if (isNaN(testInput) === true) {
      return "Not a Number";
    }
}



function formSubmission(document, list,  pilot, copilot, fuelLevel, cargoLevel) {
   //validateInput(formField)
   list = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   let fuelStatus = document.getElementById("fuelStatus")
   cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus")

   copilotStatus.textContent = `Copilot ${copilot} is ready for launch`
   pilotStatus.textContent = `Pilot ${pilot} is ready to launch`
   list.style.visbility = "hidden"

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
      alert("All fields are required!");
      
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot === "Is a Number") || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
      //alert("Please provide valid information");
    }
   
    //Call validateInput here(check for empty,check for type)


    
    if (fuelLevel.value < 10000) {
      list.style.visiblity = "visible"
      fuelStatus.textContent = "Fuel level too low for launch"
      launchStatus.textContent = "Shuttle Not Ready for Launch"
      launchStatus.style.color = "rgb(199, 37, 78)"
      cargoStatus.textContent = "Cargo mass low enough for launch";
      copilotStatus.textContent = "Co-pilot Bob is ready for launch";
      pilotStatus.textContent = "Pilot Chris is ready for launch";

    } else if (cargoLevel.value > 10000) {
      list.style.visibility = "visible"
      cargoStatus.textContent = "Cargo mass too heavy for launch"
      launchStatus.textContent = "Shuttle Not Ready for Launch"
      launchStatus.style.color = "rgb(199, 37, 78)"
      fuelStatus.textContent = "Fuel level high enough for launch";
      pilotStatus.textContent = "Pilot Chris is ready for launch";
      copilotStatus.textContent = "Co-pilot Bob is ready for launch"
      
    } else {
      list.style.visibility = "visible"
      launchStatus.textContent = "Shuttle Not Ready for Launch"
      launchStatus.style.color = "rgb(199, 37, 78)"
      pilotStatus.textContent = "Pilot Chris is ready for launch"
      copilotStatus.textContent = "Co-pilot Bob is ready for launch"
      fuelStatus.textContent = "Fuel level too low for launch"
      cargoStatus.textContent = "Cargo mass too heavy for launch"
    }
      
  

   
    
} 
    
//innerhtml to update list in html
//target retangle on top of screen for destination

async function myFetch() {
  let planetsReturned = "";

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     return response.json() 
  });


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
