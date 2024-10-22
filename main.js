/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("delta").addEventListener("click", delta);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}


// Delta, calculate the difference between two numbers//
function delta(a, b) {
let answer = a - b 
return answer
}


//Slope of  a line//
function slope(x1, y1, x2, y2) {
    let slope = delta(y2, y1) / delta(x2, x1)
    return slope
}

//average of two numbers//
function avg(n1, n2) {
 let avg = (n1 + n2) / 2
 return avg
}

//rounding user value//
function round_user(value) {
    let d = Number(document.getElementById("rounding") .value)
    let answer = Math.round(value * 10**d) / 10**d;
    return answer
}



function length(x1, y1, x2, y2) {
    let answer = delta(x2, x1)**2
    let answer1 = delta(y2, y1)**2
    let x = Math.sqrt(answer)
    let y = (answer1)
    let z = x - y
    return z
}

function rect_prism_volume() {


}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

