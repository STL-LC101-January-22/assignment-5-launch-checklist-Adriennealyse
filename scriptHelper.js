// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
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
  console.log('validInput is checking ' + testInput)
  if (testInput === "" || testInput === null) {
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

  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
   
  list.style.visibility = "hidden"
  //launchStatus.style.color = "rgb(199, 37, 78)"

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
      
  } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
      alert("Please provide valid information");
  }
   
  //Call validateInput here(check for empty,check for type)


  // Presume that all data is good, otherwise the checks will update
  //list.style.visibility = "visible"
  //launchStatus.textContent = "Shuttle is Ready for Launch"
  //launchStatus.style.color = "rgb(65, 159, 106)"
  //pilotStatus.textContent = "Pilot Chris is ready for launch"
  //copilotStatus.textContent = "Co-pilot Bob is ready for launch"
  //fuelStatus.textContent = "Fuel level high enough for launch"
  //cargoStatus.textContent = "Cargo mass low enough for launch"
    

  if (fuelLevel.value < 10000) {
    list.style.visibility = "visible"
    fuelStatus.innerHTML = "Fuel level too low for launch"
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "rgb(199, 37, 78)"
  } else if (cargoLevel.value > 10000) {
    list.style.visibility = "visible"
    cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "rgb(199, 37, 78)"
  } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
    list.style.visibility = "visible"
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    fuelStatus.innerHTML = "Fuel level too low for launch"
    cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    launchStatus.style.color = "rgb(199, 37, 78)"
  } else {
    list.style.visibility = "visible"
    launchStatus.innerHTML = "Shuttle is Ready for Launch"
    launchStatus.style.color = "rgb(65, 159, 106)"

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

  if ( planets === '' || planets === null) {
    alert('Variable planets is null or empty')
    return null
  }
  let planetSelector = Math.floor(Math.random() * (planets.length));
    
  return planets[planetSelector]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
