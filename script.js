function calculate() {
    var q1 = parseFloat(document.getElementById("pointA").value);
    var q2 = parseFloat(document.getElementById("pointB").value);
    var q3 = parseFloat(document.getElementById("pointC").value);
    
    var result = document.getElementById("result");
    result.innerHTML = "<table><tr><th>Point</th><th>Electric Field</th><th>Force</th><th>Angle (degrees)</th></tr>" +
        "<tr><td>A</td><td>" + calculateElectricField(q1, q2, q3, 'A') + "</td><td>" + calculateForce(q1, q2, q3, 'A') + "</td><td>" + calculateAngle(q1, q2, q3, 'A') + "</td></tr>" +
        "<tr><td>B</td><td>" + calculateElectricField(q2, q1, q3, 'B') + "</td><td>" + calculateForce(q2, q1, q3, 'B') + "</td><td>" + calculateAngle(q2, q1, q3, 'B') + "</td></tr>" +
        "<tr><td>C</td><td>" + calculateElectricField(q3, q1, q2, 'C') + "</td><td>" + calculateForce(q3, q1, q2, 'C') + "</td><td>" + calculateAngle(q3, q1, q2, 'C') + "</td></tr>" +
        "</table>";
}

function calculateElectricField(q, q1, q2, point) {
    var k = 8.9875517923 * Math.pow(10, 9); // Coulomb's constant
    var r = calculateDistance(point);
    return k * q * (q1 / Math.pow(r[0], 2) + q2 / Math.pow(r[1], 2));
}

function calculateForce(q, q1, q2, point) {
    var k = 8.9875517923 * Math.pow(10, 9); // Coulomb's constant
    var r = calculateDistance(point);
    return k * q * (q1 / Math.pow(r[0], 2) + q2 / Math.pow(r[1], 2));
}

function calculateAngle(q, q1, q2, point) {
    var r = calculateDistance(point);
    var angleRad = Math.atan(r[1] / r[0]);
    var angleDeg = angleRad * (180 / Math.PI);
    return angleDeg;
}

function calculateDistance(point) {
    // Assume points A, B, and C are at coordinates (0, 0), (1, 0), and (0.5, sqrt(3)/2) respectively
    var rAB = 1;
    var rAC = Math.sqrt(0.5 * 0.5 + Math.pow(Math.sqrt(3) / 2, 2));
    var rBC = 1;
    if (point === 'A') {
        return [rAB, rAC];
    } else if (point === 'B') {
        return [rAB, rBC];
    } else if (point === 'C') {
        return [rAC, rBC];
    }
}
