const form = document.forms.calculator;
const fuelType = form.elements.fuel_type.value;
const engineSize = form.elements.engine.value;
const paymentMethod = form.elements.payment.value;

const newUsed = form.elements.car.value;
const owners = form.elements.owner.value;
const carUse = document.getElementById('used_owners');
carUse.style.display = "none";
const checkedNew = document.getElementById('new');
const checkedUsed = document.getElementById('used');

const carSelect = document.getElementById('cars');
const modelSelect = document.getElementById('models');
const carModelSelect = document.getElementById('models');
const selectedCarModel = carModelSelect.options[carModelSelect.selectedIndex];
const carModel = document.getElementById("car-model");
const calculateButton = document.getElementById('calculate_btn');

carSelect.addEventListener('change', () => {
  const selectedMake = carSelect.options[carSelect.selectedIndex].value;
  modelSelect.querySelectorAll('option').forEach((option) => {
    if (option.dataset.carMake === selectedMake) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

//function checkValidNumber(input) {
  //const regex = /^(1\.[1-9]|[2-3]\.[0-8])$/;
  //return regex.test(input);
//}

function calculatePrice() {
const selectedCarModel = carModelSelect.options[carModelSelect.selectedIndex];
const carPrice = selectedCarModel.dataset.price;
const fuelTypeElement = document.querySelector('input[name="fuel_type"]:checked');
  if (!fuelTypeElement) {
    return;
  }
  let discount = 0;
  if (newUsed === "new") {
} else if (newUsed === "used") {
  discount = 10;
}
let discountUsed = 0;
  if(owners === "oneowner"){
  } else if (owners === "twoowners"){
      discountUsed = 10;
    }
  
  const priceAfterDiscount = parseFloat(carPrice) - (parseFloat(carPrice) * discount / 100) - (parseFloat(carPrice) * discountUsed / 100)
  let price = priceAfterDiscount;
  
  if (fuelTypeElement.value === "diesel") {
    price *= 1.05;
  } else if (fuelTypeElement.value === "hybrid") {
    price *= 1.1;
  } else if (fuelTypeElement.value === "electric") {
    price *= 1.25;
  }

 
  if (engineSize >= 1.1 && engineSize <= 1.6) {
    price *= 1.03;
  } else if (engineSize > 1.6 && engineSize <= 2.4) {
    price *= 1.05;
  } else {
    price *= 1.1;
  }
  return price;
}

calculateButton.addEventListener('click', () => {
  const totalPrice = document.getElementById('result');
  totalPrice.textContent = calculatePrice().toFixed(0);
});
  checkedNew.addEventListener('click', function(){
    carUse.style.display = 'none';
  })
  checkedUsed.addEventListener('click', function(){
    carUse.style.display = 'block';
  })

