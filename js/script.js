// When the user clicks on <div>, open the popup
// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }
// When the user clicks on <div>, open the popup
// function myFunction() {
//     var popup = document.getElementById("myPopupTwo");
//     popup.classList.toggle("show");
// }

// var buttonOne = document.getElementById('this1');

// buttonOne.addEventListener("click", function() {
//   console.log(this.id);
// })

// var buttonTwo = document.getElementById('this2');

// buttonTwo.addEventListener("click", function() {
//   var ids = this.id;
//   console.log(ids);
// })

// var buttonThree = document.getElementById('this3');

// buttonThree.addEventListener("click", function() {
//   var ids = this.id;
//   console.log(ids);
// })


// var buttons = document.getElementsByTagName("button");
// var buttonsLength = buttons.length;
// console.log(buttonsLength)
// for (i = 0; i < buttonsLength; i++) {
// // var buttonClicked = document.getElementById('thisOne' + i.toString());

// // buttonClicked.addEventListener("click", function() {
// //   var ids = this.id;
// //   console.log(ids);
// // });
//   console.log("ID: this" + i.toString())
// }

// var buttons = document.getElementsByTagName("button");
// var buttonsLength = buttons.length;
// console.log(buttonsLength)
// for (i = 0; i < buttonsLength; i++) {
//   var buttonClicked = document.getElementById('this' + i.toString());
  

//   buttonClicked.addEventListener("click", function() {
//     console.log(this.id);
//   });

//   console.log("this" + i.toString())
// }


var buttons = document.getElementsByTagName("button");
var buttonsLength = buttons.length;

for (i = 0; i < buttonsLength; i++) {
  var buttonClicked = document.getElementById('this' + i.toString());
	// var popup = document.getElementById("myPopup" + i.toString());
    console.log("myPopup" + i.toString());
  

  buttonClicked.addEventListener("click", function() {
    console.log(this.id);
    // console.log(this.children[0].id);
    var r = this.children[0];
    console.log(r.id);
    var popup = document.getElementById(r.id);
    popup.classList.toggle("show");
    // console.log("myPopup" + i.toString());
  });
}