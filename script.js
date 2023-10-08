function bmi() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;

    let bmi= w/(h/100)*2

    if (bmi <= 18.5) {
        document.getElementById('message').innerHTML = 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'Normal weight'
    } else if (bmi >= 25 &&  bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'Overweight'
    } else if (bmi >= 30) {
        document.getElementById('message').innerHTML = 'Obesity'
    }
    document.getElementById("result").innerHTML="Your BMI is " + bmi;

}

