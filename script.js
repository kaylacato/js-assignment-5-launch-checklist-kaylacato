// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   let form = document.querySelector("launchForm")
   form.addEventListener("submit", function(event){
    event.preventDefault();
    // Any code in here will execute after the form submits
    // To make this file more organized 
    // We have to understand what has to be passed into the formSubmission function
    // the document is the document object
    // the pilot/copilot/fuelLevel/cargoMass we need to select these inputs using the DOM and pass in the values of these inputs into the forSubmission function
    document.querySelector("input[name=engine]:checked")
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("copilotName");
    let fuelInput = document.querySelector("fuelLevel");
    let cargoInput = document.querySelector("cargoMass");
    // Alongside selecting all the inputs from the form we also want to select the faultyItems div and pass into formSubmission() 
    let list = document.querySelector("faultyItems");

    formSubmission(document, list, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value)
   
   })
});