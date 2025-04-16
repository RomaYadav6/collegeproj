document.getElementById("changetext").addEventListener("click", function () {
  let p = document.getElementById("h1");
  p.textContent = "hi Roma";
});
//example2
document.getElementById("highlightme").addEventListener("click", function () {
  let hold = document.getElementById("citylist");
  hold.firstElementChild.classList.toggle("higlight");
});

document.getElementById("bodych").addEventListener("click", function () {
  let hold = document.getElementById("color").value; // Get the value of the color input
  document.body.style.backgroundColor = hold; // Apply the color to the body
});
document.getElementById("alertme").addEventListener("mouseover", function () {
  alert("chaicode");
});
document.getElementById("citylist").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".item1")) {
    alert("you selected:" + event.target.textContent);
  }
});
