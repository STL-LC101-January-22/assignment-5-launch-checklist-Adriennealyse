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

/*function validateInput(testInput) {
   window.addEventListener("load", function(){

   })
}*/

function validateInput("formField") {

       window.addEventListener("load", function() {
        
        let form = document.querySelector("form");
        let inputResponse = ""
        form.addEventListener("submit", function(event) {
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass]");
            if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                alert("All fields are required!");
                event.preventDefault();

                return "Empty"

            } else if (typeof(pilotName.value) !== String || copilotName.value !== String) {
                alert("Is a Number");
                event.preventDefault();

                return "Is a Number"

            } else if (isNan(fuelLevel.value) == true || cargoMass.value.isNaN) {
                alert("Not a Number");
                event.preventDefault();
                
                return "Not a Number"
            }
        });
    });
}

function formSubmission(document.getElementById("testForm"), document.getElementById("faultyItems"), 'pilotName', 'copilotName', 'fuelLevel', 'cargoLevel') {
   
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
