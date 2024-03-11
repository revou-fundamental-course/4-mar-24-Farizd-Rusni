function Calculate() {
  var height = document.getElementById("h-input").value;
  var weight = document.getElementById("w-input").value;

  var result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;

  if (!isNaN(result)) {
    document.getElementById("bmi-output").innerHTML = result;
    if (result < 18.5) {
      document.getElementById("bmi-status").innerHTML =
        "Kekurangan Berat Badan";
    } else if (result < 25) {
      document.getElementById("bmi-status").innerHTML = "Normal (Ideal)";
    } else if (result < 30) {
      document.getElementById("bmi-status").innerHTML = "Kelebihan Berat Badan";
    } else {
      document.getElementById("bmi-status").innerHTML = "Kegemukan (Obesitas)";
    }
  }
}

// Function Reset Form BMI
function resetBmi() {
  document.getElementById("myForm").reset();
}
