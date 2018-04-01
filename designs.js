/*
*
* Setting initial variables
*
*/
  let rows = 0;
  let columns = 0;
  let color = '#000000';

  /*
  *
  * Create table from Choose Grid Size
  *
  */

// Set listeners from the form
let form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  function makeGrid(submit) {

    // Receive values for columns and rows
    rows = document.getElementById('inputHeight').value;
    columns = document.getElementById('inputWeight').value;


    // Select the table to insert rows and columns
    let theRows = document.getElementById('pixelCanvas');

    // Create the rows from #inputHeight
      for (let rowNumber = 0; rowNumber < rows; rowNumber++ ) {
        // Create element tr
        let createTr = document.createElement('tr');

        // Create the columns from #inputWidth
        for (let columnNumber = 0; columnNumber < columns; columnNumber++ ) {

          // Create element td
          let createTd = document.createElement('td');

          // Insert the columns td into the rows tr
          createTr.appendChild(createTd);
        }
      // Insert the rows tr into the table
      theRows.appendChild(createTr);
    }

  }
  makeGrid();
});


/*
*
* Get color from Pick A Color
*
*/

// Set listeners for color
let getColor = document.querySelector('#colorPicker');
getColor.addEventListener('input', function(event) {
  event.preventDefault();

  // Get color value from user
  let color = document.getElementById('colorPicker').value;

  // Show test
  console.log(color);

  /*
  *
  * Create listeners for the grid's cells
  *
  */
  // Select all the cells from the grid
  let getCell = document.querySelector('#pixelCanvas');
  let cell = document.querySelectorAll('td');
  //listen to the cells
    getCell.addEventListener('click', function(event) {

        getCell.style.cssText = 'background-color:' + color + ';';

  //
  //
   });


});

 let titulo = document.getElementsByTagName('td');
//  titulo.addEventListener('click', function() {
//    titulo.style.cssText = 'color: red;';
//
// });
