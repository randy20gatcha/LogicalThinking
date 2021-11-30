//-- The Get group
// Get the modal
var modal = document.getElementById("myModal");
var modalTwo = document.getElementById("myModalTwo");
var modalThree = document.getElementById("myModalThree");
var modalFour = document.getElementById("myModalFour");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtnTwo");
var btn3 = document.getElementById("myBtnThree");
var btn4 = document.getElementById("myBtnFour");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementById("closed");
var spanThree = document.getElementById("closed3");
var spanFour = document.getElementById("closed4");


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


 