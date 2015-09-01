var render = function(gridInstance) {
   var testString = gridInstance.string(); 

   //container.innerHTML = '';
   var tab = document.createElement('table');
   document.body.appendChild(tab);

        
   for (var i = 0; i <=8; i++) {
      var row = document.createElement('tr');
      row.setAttribute('id', 'row' + i);
      tab.appendChild(row);
   }

    for (var j = 0; j <= 80; j++) {
      var cell = document.createElement('td');
      var cellContent = testString[j];

      cell.setAttribute('id', i);
      cell.innerHTML = cellContent;

      if (j % 3 === 0) {
          cell.classList.add('class', 'borderCell')
      }    
        
      var rowNumber = Math.floor( j/9 );
      var rowID = document.getElementById('row' + rowNumber);

      rowID.appendChild(cell);
    }
        
};

var grid;

var gridString = '.94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4...';

function startup() {
    //make grid instance
    //feed grid instance to render
    grid = new Grid(gridString); 
    render(grid); 
}; 
    
window.onload = startup;











