/**
 * Objective: get base, height of a triangle. Calculate the area using the provided formula. and then display the area.
 * step-1: get base value.
 * step-2: added an id in the base input filed.
 * step-3: use getElementById to access the input filed.
 * step-4: get value from the input field (value is string now).
 * step-5: convert the value to a number ( use parseFloat ).
 */ 
// triangle
function triangleAreaCalculator(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('Area of the triangle is: ', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangleArea');
    triangleAreaSpan.innerText = area;
}


// ----rectangle----
function rectangleAreaCalculator(){
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(typeof width);

    // get rectangle height value
    const rectangleHeightInput = document.getElementById('rectangle-length');
    const rectangleHeightText = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightText);
    // console.log(height);

    const rectangleArea = width * height;
    console.log(rectangleArea);

}