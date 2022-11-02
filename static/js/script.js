import { chartGenerator } from "./chart.js";
import { textAreaValidator } from "./textAreaValidator.js";
const sendButton = document.querySelector("#sendButton");

// textArea
const textArea = document.querySelector("#textArea");
// checkBoxes
// get checked option
function checkedOption() {
  const checkBoxes = document.querySelectorAll(".checkBox");
  let sortList = [];

  checkBoxes.forEach(el => {
    if (el.checked == true) {
      sortList.push(el.value);
    }
  });

  return sortList;
}

// put the data get it from server in html template
function updateData(result) {
  // get result element
  const resultElements = document.getElementById("sortResult");
  // get exec time box
  const execTime = document.getElementById("execTime");
  execTime.innerHTML = "";
  let key = Object.keys(result[0])[0];
  let sortArray = result[0][key][0];
  resultElements.innerHTML = `[${sortArray}]`;

  let exec_times = [];
  let sorts_label = [];
  result.forEach(e => {
    let key = Object.keys(e)[0];
    sorts_label.push(key);
    let exec_time = e[key][1];
    exec_times.push(parseInt(parseFloat(exec_time) * 10000000));

    execTime.innerHTML += `<p>${key} sort : ${exec_time} secend</p>`;
  });
  exec_times.push(0);
  // generate chart
  chartGenerator(sorts_label, exec_times);
}

// send request function

async function sendDataToServer(sortOpt, arr) {
  await $.ajax({
    type: "POST",
    url: "/sort",
    data: JSON.stringify([sortOpt, arr]),
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      updateData(result);
    },
  });
}

sendButton.addEventListener("click", e => {
  e.preventDefault();
  let sortOption = checkedOption();
  let array = [];
  try {
    array = JSON.parse(textArea.value);
  } catch (e) {}
  if (textAreaValidator(array)) {
    sendDataToServer(sortOption, array);
  }
});
