// show glass products
var glassProducts = document.getElementById("glassProducts");
var lenseProducts = document.getElementById("lenseProducts");  
function showGlass() {
  glassProducts.style.display = "flex";
  lenseProducts.style.display = "none";
}
// show lense products
function showLense() {
    glassProducts.style.display = "none";
    lenseProducts.style.display = "flex";
}
// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
let message = document.getElementById("message");

function submitForm(event) {
  event.preventDefault();
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");  
  message.style.display = "block"; 
  if (fname.value == "" || lname.value == "" || email.value == "") {
    message.innerHTML = "Please fill out all the fields!";
  }
  else {
    message.innerHTML = "Submit success! Thank you !";
    message.classList.remove("invalid");
    message.classList.add("valid");
  }
}
//ERROR:Fetch API cannot load 
//file:///C:/Users/Betty/repos/5webpages%20WD2/calender.html.
//URL scheme "file" is not supported.
//interactivity.js:40 Uncaught (in promise) TypeError: Failed to fetch

/*
fetch("./html/calender.html")
.then(response => response.text())
.then(caldata => {
    let calender = document.getElementById("calender");
    calender.innerHTML = caldata;
})

fetch("./html/addcalender.html")
.then(response => response.text())
.then(addcaldata => {
    let addcalender = document.getElementById("addcalender");
    addcalender.innerHTML = addcaldata;
})
*/

