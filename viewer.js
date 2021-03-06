var Grid = require('./grid.js');
var DigitSet = require ('./digitset.js');
function printBoard ( string ) {
  var stringArray = [];

  for ( var i = 0; i < 9; i++ ){
    stringArray.push( string.slice( (9*i), (9*i + 9) ) )
  }

  var row0 = stringArray[0];  
  var row1 = stringArray[1];
  var row2 = stringArray[2];
  var row3 = stringArray[3];
  var row4 = stringArray[4];
  var row5 = stringArray[5];
  var row6 = stringArray[6];
  var row7 = stringArray[7];
  var row8 = stringArray[8];


  function buildBoard ( string ) {

    board = '';
    
    function buildRows () {
      for ( var i = 0; i < 9; i++ ) {
        for (var j = 0; j < 9; j++) {
          if (j%3 === 0){
            board += '| ' + (stringArray[i])[j] + ' '//row1[i];
          }
          else {
            board += (stringArray[i])[j] +' ';
          }
          
          if ( (j + 1) % 9 === 0 && j !== 0 ) {
            board += '| \n';
          }
        }
      }
    }
    
    buildRows();

    return board;
  }
  
  console.log( buildBoard (string) );
}