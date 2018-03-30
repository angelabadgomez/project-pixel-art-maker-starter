/*
*
*Setting variables
*
*/





//set listeners from the form
let form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  //receive values for columns and rows
  const rows = document.getElementById('inputHeight').value;
  const columns = document.getElementById('inputWeight').value;
  //testing message
  console.log(rows);
});

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {


}
