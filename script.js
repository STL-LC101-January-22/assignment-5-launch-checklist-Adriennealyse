// Write your JavaScript code here!
//alert("Here")
window.addEventListener("load", function() {
   document.getElementById
   list.style.visibility = "hidden"
   
    console.log("here")
   let thePlanet =  
   //let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   //let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       // validateInput(formField)
   })
   
});


form.addEventListener("submit", function(event) {
    alert("TEST")
    validateInput( document.querySelector("form") )

    return preventDefault()
});
//form.addEventListener("submit", validateInput( document.querySelector("form")  ))