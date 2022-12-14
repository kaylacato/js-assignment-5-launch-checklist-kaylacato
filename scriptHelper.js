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

function validateInput(testInput) {
// take in a value from one of the form inputs and returns information about whether the info is valid or not
// if the value passed into this function is empty>> return "Empty"
// else if the value passed is not a number>> return "Not a Number"
// else if the value passed IS a number>> return "Is a Number"
//  ex: isNAN(testInput) will return true if testInput is NOT a number
//  ex: isNAN()
    if(testInput === ""){
        return "Empty"
    } else if(isNaN(Number(testInput))){
        return "Not a number"
    } else{
        return "Is a number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
// given that we have called this function in script.js, let's assess what we now have access to in this function
// first we passed in the global document object so now we can to document.getElemntById and other DOM functions
// we also passed in the value of all the inputs after submitting the form
// so we now have the ability to validate that these values are what they are supposed to be
// what does it mean for these values to be valid?
// Order of operations:
//  if any of the fields are empty>>send alert to user that all fields are required
//  else if any fields are wrong data type>>send alert to user that input is invalid
//  else in the case we pass both of these validations then we can update the shuttle requirements 
let fuel = document.getElementById("fuelStatus");
let cargo = document.getElementById("cargoStatus");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");

if (validateInput(pilot) === "Empty"|| validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
 } else if (validateInput(pilot)=== "Is a number" || validateInput(copilot)=== "Is a number" || validateInput(fuelLevel)=== "Not a number" || validateInput(cargoLevel)=== "Not a number"){
    alert("Invalid input");
}
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