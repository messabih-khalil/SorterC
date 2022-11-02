// check if [] is exist

// ? with regex

let errors = [];
// check if empty
function isEmpty(list) {
  console.log(list);
  if (list.length == 0 || list == "") {
    errors.push("The list should not be empty");
  }
}

// check if all elements is invalid number
function isNumbers(list) {
  list.forEach(e => {
    if (Number.isInteger(e) === false) {
      errors.push("The list should contain only numbers");
      return;
    }
  });
}

// write errors in div
function writeErrors() {
  const errorBox = document.getElementById("textAreaError");
  errors.forEach(e => {
    errorBox.innerHTML += e;
  });
}
// validator
export function textAreaValidator(value) {
  // errors
  errors = [];
  console.log(value);
  // check if is empty
  isEmpty(value);
  isNumbers(value);
  //
  writeErrors();

  console.log(errors);
  if (errors.length == 0) {
    document.getElementById("textAreaError").innerHTML = "";
    return true;
  }
  return false;
}
