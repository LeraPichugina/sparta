const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  if (calculateCm.value === "" || calculateKg.value === "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    calculateMessage.textContent = "Рост и вес";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Ваш индекс массы тела ${bmi} - Дефицит`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Ваш индекс массы тела ${bmi} - Норма`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Ваш индекс массы тела ${bmi} - Избыток`;
    }

    calculateCm.value = "";
    calculateKg.value = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);
