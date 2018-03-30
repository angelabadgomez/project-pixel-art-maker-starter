/*
*
*Setting variables
*
*/





// Set listeners from the form
let form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Receive values for columns and rows
  const rows = document.getElementById('inputHeight').value;
  const columns = document.getElementById('inputWeight').value;

  // show test
  console.log(rows, columns);
});

// Set listeners for color
let getColor = document.querySelector('#colorPicker');
getColor.addEventListener('input', function(event) {
  event.preventDefault();

  // Get color value from user
  let color = document.getElementById('colorPicker').value;

  // Show test
  console.log(color);
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {


}
