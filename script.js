$(document).ready(function () {
    let categories = [];
  
    function fetchCategoriesAndClues() {
      const randomOffset = Math.floor(Math.random() * 100);
      const apiUrl = `http://jservice.io/api/categories?count=6&offset=${randomOffset}`;
  
      $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
          categories = data;
          displayBoard();
        },
        error: function (error) {
          console.log('Error fetching categories:', error);
        }
      });
    }
  
    function displayBoard() {
      const table = $('<table>');
      const headerRow = $('<tr>');
  
      for (let i = 0; i < categories.length; i++) {
        headerRow.append($('<th>').text(categories[i].title));
      }
  
      table.append(headerRow);
  
      for (let i = 0; i < 5; i++) {
        const row = $('<tr>');
  
        for (let j = 0; j < categories.length; j++) {
          const cell = $('<td>').text('?');
          row.append(cell);
        }
  
        table.append(row);
      }
  
      $('#jeopardy-board').empty().append(table);
    }
  
    $(document).on('click', 'td', function () {
      const cell = $(this);
      const row = cell.parent().index() - 1; // Subtract 1 to ignore header row
      const col = cell.index();
  
     
      if (cell.text() === '?') {
       
        cell.text(categories[col].clues[row].question);
      } else if (cell.text() === categories[col].clues[row].question) {
        
        cell.text(categories[col].clues[row].answer);
      }
    });
  
    $('#restart-button').on('click', function () {
      fetchCategoriesAndClues();
    });
  
    
    fetchCategoriesAndClues();
  });
  