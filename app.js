//-- The Get group
// Get the modal
let modal = document.getElementById("myModal");
let modalTwo = document.getElementById("myModalTwo");
let modalThree = document.getElementById("myModalThree");
let modalFour = document.getElementById("myModalFour");

// Get the button that opens the modal
let btn1 = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtnTwo");
let btn3 = document.getElementById("myBtnThree");
let btn4 = document.getElementById("myBtnFour");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let spanTwo = document.getElementById("closed");
let spanThree = document.getElementById("closed3");
let spanFour = document.getElementById("closed4");


//-- The action group
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modalTwo.style.display = "block";
}

btn3.onclick = function() {
  modalThree.style.display = "block";
}

btn4.onclick = function() {
  modalFour.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

spanThree.onclick = function() {
  modalThree.style.display = "none";
}

spanFour.onclick = function() {
  modalFour.style.display = "none";
}

//--Some logic
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalTwo) {
      modalTwo.style.display = "none";
  }
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
  if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
}


 