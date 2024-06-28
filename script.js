let mortgageAmount = document.getElementById("Amount");
let mortgageAmountError = document.getElementById("amount-error");
let mortgageRate = document.getElementById("rate");
let mortgageRateError = document.getElementById("rate-error");
let mortgageTerm = document.getElementById("term");
let mortgageTermError = document.getElementById("term-error");

const principal = parseFloat(mortgageAmount.value);
    const annualRate = parseFloat(mortgageAmount.value);
    const years = parseFloat(mortgageTerm.value);

const right1 = document.getElementById("right1");
const right2 = document.getElementById("right2");

let radios = Array.from(document.getElementsByName("query-type"));
let radioError = document.getElementById("radio-error");

const formBtn = document.getElementById("btn");


function validateAndCalculate() {
    let hasErrors = false; 
    if (mortgageAmount.value.trim() === "") {
      showError(mortgageAmount, mortgageAmountError);
      hasErrors = true;
    }
    
  
    if (!hasErrors) { 
      const principal = parseFloat(mortgageAmount.value);
      const annualRate = parseFloat(mortgageRate.value) / 100; 
      const years = parseFloat(mortgageTerm.value);
      calculateAll(principal, annualRate, years);
    }
  }
  
  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkErrors();
    checkRadios();
    validateAndCalculate(); 
  })
  


function checkErrors() {
    showError(mortgageAmount, mortgageAmountError);
    showError(mortgageTerm, mortgageTermError);
    showError(mortgageRate, mortgageRateError);
}


function showError(inputElement, errorElement) {
    if (inputElement.value.trim() === "") {
        errorElement.style.display = "block";
        inputElement.classList.add("Errors");
    } else {
        errorElement.style.display = "none";
        inputElement.classList.remove("Errors");
        calculateAll(principal, annualRate, years);
    }
}

function clearAll() {
    mortgageAmount.value = "";
    mortgageRate.value = "";
    mortgageTerm.value = "";
    right1.classList.remove("hidden");
    right2.classList.add("hidden");
}


function checkRadios() {
    let selected = radios.some(radio => radio.checked);
    if (!selected) {
        radioError.style.display = "block";
    } else {
        radioError.style.display = "none";
        right1.classList.remove("hidden");
    right2.classList.add("hidden");
    }
}


const calculateAll = (p, r, t) => {
    const totalIncome = p * r * t;
    const total = totalIncome.toFixed(3);

    const monthlyPayment = (totalIncome / 12).toFixed(3);
    right1.classList.add("hidden");
    right2.classList.remove("hidden");
    document.getElementById("monthly-repayment").textContent = monthlyPayment;
    document.getElementById("total").textContent = total;
}