const cardholderName = document.querySelector(".cardholder-name__input");
const cardNumber = document.querySelector(".card-number__input");
const cardExpiry = document.querySelector(".expiry-date__input");
const cardSecret = document.querySelector(".secret__input");
const btnSubmit = document.querySelector(".form__submit");
const btnContinue = document.querySelector(".complete__cta");

// Setting min and max for expiry date dynamically
let today = new Date();
cardExpiry.min =
  today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0");
cardExpiry.max =
  today.getFullYear() + 5 + "-" + String(today.getMonth() + 1).padStart(2, "0");

cardholderName.addEventListener("input", function (e) {
  let cardHolderName = validateInput(e.target, "name");
  e.target.value = cardHolderName;
  document.querySelector(".front__cardholder-name").textContent =
    cardHolderName;
});

cardNumber.addEventListener("input", function (e) {
  let cardNumber = validateInput(e.target, "numeric");
  cardNumber = cardNumber.slice(0, 16);
  e.target.value = cardNumber;

  cardNumber = cardNumber.padEnd(16, "_");
  for (let i = 0; i < cardNumber.length / 4; i++) {
    let span = document.querySelector("span:nth-child(" + (i + 1) + ")");
    span.textContent = cardNumber.slice(4 * i, 4 * i + 4);
  }
});

cardExpiry.addEventListener("focusout", function (e) {
  let expiryDate = e.target.value;
  e.target.value = expiryDate;
  document.querySelector(".front__expiry-date").textContent =
    expiryDate.slice(-2) + "/" + expiryDate.slice(2, 4);
});

cardSecret.addEventListener("input", function (e) {
  let cardSecret = validateInput(e.target, "numeric");
  cardSecret = cardSecret.slice(0, 3);
  e.target.value = cardSecret;
  document.querySelector(".back__secret").textContent = "*".repeat(
    cardSecret.length
  );
});

function validateInput(element, inputType) {
  let value = element.value;
  if (inputType == "numeric") {
    value = value.replace(/\D/g, "");
  } else if (inputType == "name") {
    value = value.replace(/[^A-Za-z ]/g, "");
  }
  return value;
}

btnSubmit.onclick = function (e) {
  let inputs = document.querySelectorAll('.form input[class$="__input"');
  let validationStatus = true;
  for (let input of inputs) {
    validationStatus = validationStatus && input.validity.valid;
  }
  if (validationStatus) {
    e.preventDefault();
    let form = document.querySelector(".form");
    form.classList.toggle("d-none");
    form.reset();
    document.querySelector(".complete").classList.toggle("d-none");
  }
};

btnContinue.onclick = function (e) {
  document.location.reload();
  document.querySelector(".form").classList.toggle("d-none");
  document.querySelector(".complete").classList.toggle("d-none");
};
