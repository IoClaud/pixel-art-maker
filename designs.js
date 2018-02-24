$(document).ready(function() {

  // Select size input
  var table = $('#pixel_canvas'),
    grid = "";

  // Reset table
  function resetGrid() {
    table.children().remove();
    grid = "";
  }

  function makeGrid() {
    let tWidth = $('#input_width').val(),
      tHeight = $('#input_height').val();

    // create a control for the max width and height size of table
    if (tWidth >= 15) {
      tWidth = 15;
      $('#input_width').val(15);
      alert('please, stay under 15 of width.');
    }

    if (tHeight >= 15) {
      tHeight = 15;
      $('#input_height').val(15)
      alert('please, stay under 15 of height.');
    }

    resetGrid();
    // Create rows
    for (let i = 1; i <= tHeight; i++) {
      grid += "<tr>";
      // Create coll
      for (let j = 1; j <= tWidth; j++) {
        grid += "<td></td>";
      }
      grid += "</tr>";
    }
    table.html(grid);
  }

  // set the initial status of able/disable for submit and reset button
  function initialBtn() {
    $("input:submit").attr("disabled", false);
    $("input:reset").attr("disabled", true);

  }

  // function to enabling reset button and disabling submit button
  function switchBtn() {
    $("input:submit").attr("disabled", true);
    $("input:reset").attr("disabled", false);
  }

  function colorCell(target) {
    // Select color input
    let color = $('#colorPicker').val();
    $(target).css('background-color', color);
  }

  function clearCell(target) {
    $(target).css('background-color', '');
  }

  // submit listener
  $('input:submit').click(function(e) {
    e.preventDefault();
    switchBtn()
    makeGrid();

    // Colorize cell
    table.on('mousedown', 'td', function() {
      colorCell(this);
    });

    table.on('dblclick', 'td', function() {
      clearCell(this);
    })
  }); // end submit's listener

  // clear table
  $('input:reset').click(function(e) {
    e.preventDefault();
    table.find('td').css('background-color', '#fff');
  });

  $(':input[type="number"]').focus(function() {
    initialBtn();
  });

}); // end Document Ready
