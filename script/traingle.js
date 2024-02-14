/**
 * Objective: get base, height of a triangle. Calculate the area using the provided formula. and then display the area.
 * step-1: get base value.
 * step-2: added an id in the base input filed.
 * step-3: use getElementById to access the input filed.
 * step-4: get value from the input field (value is string now).
 * step-5: convert the value to a number ( use parseFloat ).
 */
// triangle
function triangleAreaCalculator() {
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
function rectangleAreaCalculator() {
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

    // calculate rectangle  area
    const area = width * height;
    console.log('Area of the rectangle: ', area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangleArea');
    rectangleAreaSpan.innerText = area;
}


// ----rectangle----
function parallelogramAreaCalculator() {
    // get rectangle base value
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    // console.log(typeof base);

    // get rectangle height value
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    // console.log(height);

    // calculate rectangle  area
    const area = base * height;
    console.log('Area of the parallelogram: ', area);

    // display rectangle area
    const parallelogramAreaSpan = document.getElementById('parallelogramArea');
    parallelogramAreaSpan.innerText = area;

}


// rhombus
function rhombusAreaCalculator(){
    // get rhombus d1 value
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1Text = rhombusD1Input.value;
    const d1 = parseFloat(rhombusD1Text);
    // console.log(d1);

    // get rhombus d2 value
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2Text = rhombusD2Input.value;
    const d2 = parseFloat(rhombusD2Text);
    // console.log(d2);

    // calculate rhombus area
    const area = 0.5 * d1 * d2;
    console.log('Rhombus area is: ', area);

    // display the rhombus area
    const rhombusAreaSpan = document.getElementById('rhombusArea');
    rhombusAreaSpan.innerText = area;
}