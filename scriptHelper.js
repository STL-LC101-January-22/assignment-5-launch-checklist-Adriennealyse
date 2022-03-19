// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

//. validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.

function validateInput(testInput) {
    //alert("validate input")
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        button.addEventListener("submit", function(event) {
            console.log("Im here")
          let pilotName = document.querySelector("input[name=pilotName]");
          let copilotName = document.querySelector("input[name=copilotName]");
          let fuelLevel = document.querySelector("input[name=fuelLevel]");
          let cargoMass = document.querySelector("input[name=cargoMass]");
            
          if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
            return "Empty"

          } else if (typeof(pilotName.value) === Number || typeof(copilotName.value) === Number) {
            alert("Invalid input!");
            // stop the form submission
            event.preventDefault();
            return "Is a Number"

          } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Input should be a number!");
            // stop the form submission
            event.preventDefault();
            return "Not a Number"

          } else { 

          }
        });
      });

}

/*function validateInput(formField) {

       //button.addEventListener("click", function() {
        
        let form = document.querySelector("form");
        //let inputResponse = ""
        button.addEventListener("click", function(event) {
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass]");

            if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
                alert("All fields are required!");
                event.preventDefault();

                return "Empty"

            } else if (typeof(pilotName.value) !== String || typeof(copilotName.value) !== String) {
                alert("Is a Number");
                event.preventDefault();

                return "Is a Number"

            } else if (isNan(fuelLevel.value) == true || cargoMass.value.isNaN) {
                alert("Not a Number");
                event.preventDefault();
                
                return "Not a Number"
            }
            formSubmission(form, pilotName, copilotName, fuelLevel, cargoMass  )
         });
    //});
}*/

function formSubmission(document, list,  pilotName, copilotName, fuelLevel, cargoLevel) {
   //validateInput(formField)
   list = document.getElementById("faultyItems");
   let pilotStatus = docment.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   copilotStatus.textContent = `Copilot ${copilotName} is ready for launch`
   pilotStatus.textContent = `Pilot ${pilotName} is ready to launch`

    

    validateInput(formField) {
       if (fuelLevel.value < 10000 ) {
           list.style.visibility === "visible" && fuelStatus.value === "Fuel level too low for launch"
           document.getElementById(launchStatus).style.color === "rgb(199, 37, 78)" && document.getElementById(launchStatus).textContent === "Shuttle not ready for launch"
           
        } else if (cargoMass.value > 10000) {
            list.style.visibility === "visible" && document.getElementById(cargoStatus) === "Cargo mass too heavy for launch"
            document.getElementById(launchStatus).style.color === "rgb(199, 37, 78)" && document.getElementById(launchStatus).textContent === "Shuttle not ready for launch"
            
        }  else {
            list.style.visibility === "visible"
            document.getElementById(launchStatus).style.color === "rgb(65, 159, 106)" && document.getElementById(launchStatus).textContent === "Shuttle is ready for launch"
        }
    }   
    
} 
    
//innerhtml to update list in html
//target retangle on top of screen for destination

async function myFetch() {
    let planetsReturned = "";

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned.json(); 

    //return response.json()
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
