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
document.getElementById("rectangle_prism_volume").addEventListener("click", rect_prism_volume);
document.getElementById("rectangle_prism_area").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume").addEventListener("click", sphere_volume);
document.getElementById("sphere_area").addEventListener("click", sphere_area);
document.getElementById("slope1").addEventListener("click", slope1);
document.getElementById("length1").addEventListener("click", length1);
document.getElementById("midpoint").addEventListener("click", midpoint);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}


// Delta, calculate the difference between two numbers
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


//length of a line
function length(x1, y1, x2, y2) {
    let answer = delta(x2, x1)**2
    let answer1 = delta(y2, y1)**2
    let z = answer + answer1 
    let x = Math.sqrt(z)
    return x
}

//volume of a rectangular prism
function rect_prism_volume() {
    //Numbers
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    //volume
    let volume = length * width * height
    document.getElementById("answer").textContent = volume
}
//calcualte the area of a rectangular prism//
function rect_prism_area() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    let area = 2 *((width * length) + (height * length) + (height * width))
    document.getElementById("answer").textContent = area
}

//caculate the volume of a sphere//
function sphere_volume() {
    let radius = Number(document.getElementById("radius").value);

    let volume = 4/3 * Math.PI * (radius**3)
    document.getElementById("answer").textContent = volume
}


//calculate the area of a sphere//
function sphere_area() {
    let radius = Number(document.getElementById("radius").value);
    let volume = 4 * (Math.PI * (radius**2))
    document.getElementById("answer").textContent = volume
}

//X1, Y1, X2, Y2//

// calculate the slope of a line//
function slope1() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let answer = slope(x1, y1, x2, y2)
    let round = round_user(answer)
    document.getElementById("answer1").textContent = round;
}


//calculate the length of a line
function length1() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let answer = length(x1, y1, x2, y2)
    let round = round_user(answer)
    document.getElementById("answer1").textContent = round;
}


// calculate the midpoint of two two points on a line//
function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let answer = avg(x1, x2) 
    let answer1 = avg(y1, y2)
    let newanswer = `The answer was ${answer}, ${answer1}`
    document.getElementById("answer1").textContent = newanswer;
}



// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
     let y = (a * x ** 2 + (b * x) + c);
    return y
}

//or//

function y_quad(a, b, c, x) {
    return -b / (2 * a);
}




// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
 
    // Calculate the discriminant
    let discriminant = b ** 2 - 4 * a * c;
 
    // Check if the discriminant is negative
    if (discriminant < 0) {
        document.getElementById("answer2").textContent = "No Zeros (discriminant is negative).";
        return;
    }
 
    // Calculate the two roots
    let positive = (-b + Math.sqrt(discriminant)) / (2 * a);
    let negative = (-b - Math.sqrt(discriminant)) / (2 * a);
    let pos = round_user(positive)
    let neg = round_user(negative)
 
    // Display the results
    document.getElementById("answer2").textContent = `Zeros: ${pos}, ${neg}`;
}
// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x = Number(document.getElementById("x").value);
    let x1 = y_quad(a, b); 
    let y = (a * x ** 2 + (b * x) + c); 
    console.log(x1,y)
    document.getElementById("answer2").textContent = `The Vertex is ${x1}, ${y}`
}

