const inputField = document.querySelector(".input-field");
const five = document.querySelector(".five-perc");
const ten = document.querySelector(".ten-perc");
const fifteen = document.querySelector(".fifteen-perc");
const twenty = document.querySelector(".twenty-perc");
const twentyFive = document.querySelector(".twentyfive-perc");
const fifty = document.querySelector(".fifty-perc");
const custom = document.querySelector(".custom");
const numberOfPeople = document.querySelector(".num-of-people");
const amount = document.querySelector(".totalTip");
const totalPerson = document.querySelector(".totalBill");
const reset = document.querySelector(".btn");
const people = document.querySelector(".people");
const warning = document.querySelector(".warning");
const init = function () {
  inputField.value = 0;
  amount.textContent = "0.00";
  totalPerson.textContent = "0.00";
  people.value = 0;
  custom.value = '';
  reset.setAttribute('disabled', '');
  warning.textContent = "";
  people.style.border = "none";
  people.removeAttribute('disabled')

};

reset.addEventListener("click", function () {
  init();
});

window.addEventListener("load", function () {
  init();
});

five.addEventListener("click", function () {
  calculate(5);
});

ten.addEventListener("click", function () {
  calculate(10);
});

fifteen.addEventListener("click", function () {
  calculate(15);
});

twentyFive.addEventListener("click", function () {
  calculate(25);
});

fifty.addEventListener("click", function () {
  calculate(50);
});

custom.addEventListener("change", function () {
  calculate(custom.value);
});

const calculate = function (tip) {
  const bill = inputField.value;
 
   if(people.value > 0){
    const tipPerPerson = parseInt((tip/100) * bill);
    amount.textContent = tipPerPerson;
    const totPerson = (parseInt(bill)/parseInt(people.value) + parseInt(tipPerPerson));
    totalPerson.textContent = totPerson;
   }else{
    warning.textContent = "can't be zero";
    reset.removeAttribute('disabled');
    people.style.border = "3px solid red";
    people.style.borderRadius = "5px";
    people.setAttribute('disabled', "")
   }
   if(parseInt(amount.textContent) > 0 || parseInt(totalPerson.textContent) > 0){
    reset.removeAttribute('disabled');
   }
  
};



