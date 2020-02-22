
var slider = document.getElementById('Range-second');
var sliderSecond = document.getElementById('Range-first');
var output = document.getElementById('min-price');
var outputSecond = document.getElementById('max-price');

output.innerHTML = slider.value;
outputSecond.innerHTML = sliderSecond.value;

sliderSecond.oninput = function () {
    outputSecond.innerHTML = this.value;
}

slider.oninput = function () {
    output.innerHTML = this.value;
}