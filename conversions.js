"use strict";

window.onload = function() {
    var button = document.querySelector("#calculate");
    button.onclick = convert;
}
function convert() {
    var inputValue = parseInt(document.querySelector("input").value);
    var optionValue = document.querySelector("select");
    
    if(optionValue.value === "kgtopounds") {
        var conversion = inputValue * 2.20462262;
    } else {
        var conversion = inputValue * 0.45359237;
    }
    
    var answer = document.querySelector("#answer");
    
    answer.innerHTML = conversion;
}