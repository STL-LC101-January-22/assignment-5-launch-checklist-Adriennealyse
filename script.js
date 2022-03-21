// Write your JavaScript code here!

// const {  formSubmission,  validateInput  } = require("./scriptHelper")
// import "./scriptHelper";

const divForm = document.querySelector('.launchForm');
const form = document.querySelector('input[value="submit"]')  // ('.testForm') // document.getElementById('.testForm'); /* correct */
const form2 = document.getElementById('testForm');
// const button = document.getElementById('formSubmit');

/**
* Delay for a number of milliseconds
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

window.addEventListener("load", function(event) {
    event.preventDefault();  // Prevent this form from auto submitting
   //document.getElementById
   //list.style.visibility = "hidden"
   // this.alert('1 Windows Load')
   /*
   this.alert('Windows Load : Div = ' + divForm )
   this.alert('Windows Load : Form = ' + form )
   this.alert('Windows Load : Form = ' + form2 )
   */

    
   let thePlanet = "" 
   let listedPlanets = "";
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   // this.alert(listedPlanetsResponse)
   console.log('Fetch Completed : ' + JSON.stringify(listedPlanetsResponse) )
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
   this.alert('All prereg has run')
});

// form.addEventListener("submit", validateInput( document.querySelector("form")  ))

   
//    window.addEventListener('submit', (e) => {
//        this.alert('Form Capture')
//        console.log('Capture')
//    });


   /*
   divForm.addEventListener('click', function(event) {
        alert('The form was clicked')
   });
   */

   /*
   button.addEventListener('click', function(event) {
       event.preventDefault();  // Prevent this form from auto submitting
       alert('Inside Button Listener')
   })
   */

   /* */
   window.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent this form from auto submitting
        alert("Form Event Listener")
        console.log('TARGET ' + event.target)
        //formSubmission( document.querySelector("form") )
        let pilot = document.querySelector("input[name=pilotName]");
        let pilotName = pilot.value;
        
        let copilot = document.querySelector("input[name=copilotName]");
        let copilotName = copilot.value;
        

        let fuel = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuel.value;

        let cargo = document.querySelector("input[name=cargoMass]");
        let cargoMass = cargo.value;
        
        formSubmission(document, 'list',  pilotName, copilotName, fuelLevel, cargoMass)

    });
    /* */

    




/*form.addEventListener("submit", function(event) {
    formSubmission( document.querySelector("form") )

    return preventDefault()
});*/

//form.addEventListener("submit", validateInput( document.querySelector("form")  ))