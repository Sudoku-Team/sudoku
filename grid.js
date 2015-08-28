var DigitSet = require( './digitset.js' );


DigitSet = ( function ( ) {

  	function digitSet ( digit ) {

   	this.possibilities = [];
		this.possibilities.length = 10;


   for ( var i = 0; i < 10; i++ ) {
			this.possibilities[i] = false;

		}

		if (digit !== '.' ) {
			this.possibilities[digit] = true;

		}

		else {
			for ( var i = 0; i < 10; i++ ) {
				this.possibilities[i] = true;

			}
		}
	}

	digitSet.prototype.update = function ( digit ) {
		this.possibilities[ digit ] = true;
	};

	return digitSet;

})();





Grid = ( function() {	//start of constructor
	function grid ( initialString ) {		//start of instance
		var initialValues = initialString.split('');	//convert starting game data to array
		for ( var i = 0; i < 81; i++ ){		//generate the digitSet squares
				this[i] = new DigitSet ( initialValues[ i ] );
		}

		this.row = function(rowNumber) {	//anonymous row math
			var row = [];
			for (var i = 0; i < 81; i++) {
				if ( Math.floor( i/9 ) === rowNumber) {
					row.push(this[i]);
				}
			}
		    return row;
		};

    	this.row0 = this.row(0);
    	this.row1 = this.row(1);
    	this.row2 = this.row(2);
    	this.row3 = this.row(3);
    	this.row4 = this.row(4);
    	this.row5 = this.row(5);
    	this.row6 = this.row(6);
    	this.row7 = this.row(7);
    	this.row8 = this.row(8);

		this.column = function(columnNumber) {	//anonymous column math
			var column = [];
			for (var i = 0; i < 81; i++) {
				if (	(i % 9) === columnNumber) {
					column.push(this[i]);
				}
			}
			return column;
		};

	  	this.column0 = this.column(0);
		this.column1 = this.column(1);
		this.column2 = this.column(2);
		this.column3 = this.column(3);
		this.column4 = this.column(4);
		this.column5 = this.column(5);
		this.column6 = this.column(6);
		this.column7 = this.column(7);
		this.column8 = this.column(8);

		this.box = function(boxNumber) {	//anonymous box math
			var box = [];
			for (var i = 0; i < 81; i++) {
				var row = Math.floor( i/9);
				var col = (i % 9);
				var boxValue = ( Math.floor(row/3) * 3 ) + ( Math.floor(col/3) );
				if (boxValue == boxNumber) {
					box.push(this[i]);
				}
			}
			return box;
		};

	  	this.box0 = this.box(0);
	  	this.box1 = this.box(1);
	  	this.box2 = this.box(2);
	  	this.box3 = this.box(3);
	  	this.box4 = this.box(4);
	  	this.box5 = this.box(5);
	  	this.box6 = this.box(6);
	  	this.box7 = this.box(7);
	  	this.box8 = this.box(8);

		//Array of All Cell Tokens
		this.cells = function() {
			var cellsArray = [];
			for (var i = 0; i < 81; i++) {
				cellsArray.push(i.toString());
			}
			return cellsArray;
		};
				// Alternate Way Pushing Entire Digiset
				// this.cells = function() {
				// 	var cellsArray = [];
				// 	for (var i = 0; i < 81; i++) {
				// 		cellsArray.push(this[i]);
				// 	}
				// 	return cellsArray;
				// };

		//Array of groupTokens (all rows)
		// grid__method--groups() #13
		//Return every row, column, and box
		this.groups = function() {
			var allGroups = [];
			for (var i = 0; i <=8; i++) {
				allGroups.push("row" + i);
			}
			for (var j = 0; j <=8; j++) {
				allGroups.push("column" + j);
			}
			for (var k = 0; k <=8; k++) {
				allGroups.push("box" + k);
			}
			return allGroups;
		};

		//grid.groups(cellToken) --> Array of all group tokens associated with cellToken
		//grid__method--groups(cellToken) #12
		this.groupsCellToken = function(cellToken) {
			var getGroups = [];
			var columnNumber = cellToken % 9;
			var rowNumber = Math.floor(cellToken / 9);
			var boxNumber = ( Math.floor(rowNumber/3) * 3 ) + ( Math.floor(columnNumber/3) );
			getGroups.push("column" + columnNumber);
			getGroups.push("row" + rowNumber);
			getGroups.push("box" + boxNumber);
			return getGroups;
		};
				// Alternate Method Returning Digiset
				// this.cellsGroupToken = function(cellToken) {
				// 	var getGroups = [];
				// 	var columnNumber = cellToken % 9;
				// 	var rowNumber = Math.floor(cellToken / 9);
				// 	var boxNumber = ( Math.floor(rowNumber/3) * 3 ) + ( Math.floor(columnNumber/3) );
				// 	getGroups.push(this["column" + columnNumber]);
				// 	getGroups.push(this["row" + rowNumber]);
				// 	getGroups.push(this["box" + boxNumber]);
				// 	return getGroups;
				// };


		//Returns "this.row0", "this.row1", "this.row2"
		this.getRow = function() {
			var getRowArray = [];
			for (var i = 0; i <= 8; i++) {
					var getRowArrayString = "row" + i;
					getRowArray.push(getRowArrayString);
			}
			return getRowArray;
		};
				// Alternate Method Returning Digisert
				// this.getRow = function() {
				// 	var allRows = [this.row0, this.row1, this.row2, this.row4, this.row5, this.row6, this.row7, this.row8];
				// 	return allRows;
				// };

		//grid__method--getRow(cellToken) #18
		this.getRowCellToken = function(cellToken) {
			var getRow = Math.floor(cellToken / 9);
			return "row" + getRow;
		};
				// Alternate Way Returning Digiset
				// this.getRow = function(cellToken) {
				// 	var getRow = Math.floor(cellToken / 9);
				// 	return this["row" + getRow];
				// };


		//grid__method--getCol() #16
		this.getCol = function() {
			var colArray = [];
			for (var i = 0; i <=8; i++) {
				var colArrayString = "column" + i;
				colArray.push(colArrayString);
			}
			return colArray;
		};
				// Alternate Digiset Way
				// this.getCol = function() {
				// 	var colArray = [];
				// 	for (var i = 0; i <= 8; i++) {
				// 		colArray.push(this["column" + i]);
				// 	}
				// 	return colArray;
				// };

		//grid__method--getCol(cellToken) #19
		this.getColCellToken = function(cellToken) {
			var getColNumber = cellToken % 9;
			return "column" + getColNumber;
		};
				// Alternate Digiset Way
				// this.getColCellToken = function(cellToken) {
				// 	var getColumn = cellToken % 9;
				// 	return this["column" + getColumn];
				// };

		//grid__method--getBox() #17
		this.getBox = function() {
			var allBoxes = [];
			for (var i = 0; i <=8; i++) {
				var allBoxesArray = "box" + i;
				allBoxes.push(allBoxesArray);
			}
			return allBoxes;
		};

	} //end of instance function

	return grid;  //return an instance

})(); //end IFFE




// var testString = '.94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..';
// var tester = new Grid( testString );

// console.log( 'object ' + tester );
// console.log( 'array of ten, all true ' + tester[0].possibilities );


// console.log( 'array of 9 ' + tester.row0 );
// console.log( ' 9 ' + tester.row0.length );
// console.log( 'array of 10, all true ' + tester.row0[0].possibilities );

// console.log( 'array of 9 ' + tester.column0 );
// console.log( ' 9 ' + tester.column0.length );
// console.log( 'array of 10 all true ' + tester.column0[0].possibilities );

// console.log( 'array of 9 ' + tester.box0 );
// console.log( ' 9 ' + tester.box0.length );
// console.log( 'array of 10 all true ' + tester.box0[0].possibilities );
