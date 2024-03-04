function calculate() {
    var distanceAB = parseFloat(document.getElementById("distanceAB").value);
    var distanceBC = parseFloat(document.getElementById("distanceBC").value);
    var distanceCA = parseFloat(document.getElementById("distanceCA").value);
    
    var charge1 = parseFloat(document.getElementById("charge1").value);
    var charge2 = parseFloat(document.getElementById("charge2").value);
    var charge3 = parseFloat(document.getElementById("charge3").value);

    charge1 = charge1 * Math.pow(10, parseFloat(charge1.substring(charge1.indexOf("^") + 1)));
    charge2 = charge2 * Math.pow(10, parseFloat(charge2.substring(charge2.indexOf("^") + 1)));
    charge3 = charge3 * Math.pow(10, parseFloat(charge3.substring(charge3.indexOf("^") + 1)));
    
    var result = document.getElementById("result");
    result.innerHTML = "<table><tr><th>Point</th><th>Electric Field</th><th>Force</th><th>Angle (degrees)</th></tr>" +
        "<tr><td>A</td><td>" + calculateElectricField(charge1, charge2, charge3, distanceAB, distanceCA, 'A') + "</td><td>" + calculateForce(charge1, charge2, charge3, distanceAB, distanceCA, 'A') + "</td><td>" + calculateAngle(charge1, charge2, charge3, distanceAB, distanceCA, 'A') + "</td></tr>" +
        "<tr><td>B</td><td>" + calculateElectricField(charge2, charge1, charge3, distanceBC, distanceAB, 'B') + "</td><td>" + calculateForce(charge2, charge1, charge3, distanceBC, distanceAB, 'B') + "</td><td>" + calculateAngle(charge2, charge1, charge3, distanceBC, distanceAB, 'B') + "</td></tr>" +
        "<tr><td>C</td><td>" + calculateElectricField(charge3, charge1, charge2, distanceCA, distanceBC, 'C') + "</td><td>" + calculateForce(charge3, charge1, charge2, distanceCA, distanceBC, 'C') + "</td><td>" + calculateAngle(charge3, charge1, charge2, distanceCA, distanceBC, 'C') + "</td></tr>" +
        "</table>";
}
