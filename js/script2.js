var display = document.querySelector("#display");
var btnAdd = document.querySelector("#btnAdd");
var lists = document.querySelector("#lists");
var btnDeleteAll = document.querySelector("#btnDeleteAll");
/////////////////////////////////////////////////////////////////
btnAdd.addEventListener("click", () => {
  lists.innerHTML += `<li>${display.value} <span><button onclick="deleted(this)">Delete</button></span></li>`;
  display.value = "";
  btnDeleteAll.style.display = "block";
});

function deleted(element) {
  element.parentNode.parentNode.remove();
  if (lists.childElementCount === 0) {
    btnDeleteAll.style.display = "none";
  }
}

btnDeleteAll.addEventListener("click", () => {
  lists.innerHTML = "";
  btnDeleteAll.style.display = "none";
});
