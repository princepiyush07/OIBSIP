function convertTemp() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = celsius * 1.8 + 32;
    document.getElementById("result").innerHTML = celsius + " Celsius = " + fahrenheit + " Fahrenheit";
}
