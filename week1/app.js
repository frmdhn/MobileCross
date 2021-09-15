const calculateBtn = document.getElementById('calc-btn')
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resultCalculateBMI = document.getElementById('result-calculate-bmi');
const catBodyType = document.getElementById('categories-body-type');
const resetBtn = document.getElementById('reset-btn');

const calculateBMI = () => {
    const enteredHeight = +heightInput.value / 100; // tinggi badan dalam meter
    const enteredWeight = +weightInput.value; // berat dalam kg

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if (bmi < 18.5) {
        catBodyType.innerHTML = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        catBodyType.innerHTML = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        catBodyType.innerHTML = "Gemuk";
    } else if (bmi >= 30) {
        catBodyType.innerHTML = "Obesitas";
    } else {
        catBodyType.innerHTML = "Undefined";
    }

    console.log(typeof(bmi));
    

    resultCalculateBMI.innerHTML = bmi;
}

const clearResult = () => {
    heightInput.value = '';
    weightInput.value = '';
    catBodyType.innerHTML = '';
    resultCalculateBMI.innerHTML = '';
}
calculateBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', clearResult);