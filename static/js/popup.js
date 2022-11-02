import { randomListGenerator } from "./randomGenerator.js";

// get show popup button

const showPopup = document.getElementById("showPopup");

// get popup element
const popup = document.getElementsByClassName("popup");

// open popup
showPopup.addEventListener("click", e => {
  e.preventDefault();
  ("click");
  popup[0].classList.add("show");
});

// close popup
const closePopup = () => {
  popup[0].classList.remove("show");
};

document.getElementById("closeIcon").addEventListener("click", e => {
  console.log("wor");
  e.preventDefault();
  closePopup();
});

// popup div error
const popupErrorHandler = errors => {
  const errorMessage = document.getElementById("errorMessage");
  errors.forEach(e => {
    errorMessage.innerHTML += e;
  });
};

const emptyErrors = () => {
  document.getElementById("errorMessage").innerHTML = "";
};
// display result to textArea
const displayResult = list => {
  const textArea = document.getElementById("textArea");
  textArea.innerHTML = `[${list}]`;
};

// input validatore

const inputValidator = async () => {
  let errors = [];

  emptyErrors();
  // get input
  const input = document.getElementById("randomInput");
  // validate input

  if (input.value == "") {
    errors.push("Please write list length");
  } else if (input.value > 10000) {
    errors.push("Please write length < 10000");
  } else if (input.value < 0) {
    errors.push("Please write positive number");
  } else {
    await randomListGenerator(input.value).then(res => {
      displayResult(res);
    });

    closePopup();
  }
  popupErrorHandler(errors);
};

//

const listGeneratorButton = document.getElementById("listGeneratorButton");

listGeneratorButton.addEventListener("click", e => {
  e.preventDefault();
  inputValidator();
});
