Grid = ( function(){

	function grid ( initialString ) {

		var intialValues = initialString.split(' ');

		for ( var i = 1; i < 82; i++ ){
			if ( initialValues[ i - 1 ] !== '.' ){
				this.i = new DigitSet ( initialValue[ i - 1 ] );
			}
			else {
				this.i = new DigitSet ( ? )
			}
		}
	};

//Row Methods
	grid.row = function(rowNumber) {
		var row = [];
		for (var i = 1; i <= 81; i++) {
			if (	Math.ceil(i/9)	== rowNumber) {
				row.push(this[i]);
			}
		}
	},
	grid.row1 = grid.row(1),
	grid.row2 = grid.row(2),
	grid.row3 = grid.row(3),
	grid.row4 = grid.row(4),
	grid.row5 = grid.row(5),
	grid.row6 = grid.row(6),
	grid.row7 = grid.row(7),
	grid.row8 = grid.row(8),
	grid.row9 = grid.row(9),

//Column Methods
	grid.column = function(columnNumber) {
		var column = [];
		for (var i = 1; i <=81; i++) {
			if (	(i % 9) == columnNumber)	) {
				column.push(this[i]);
			}
		}
		return column;
	},
	grid.column1 = grid.column(1),
	grid.column2 = grid.column(2),
	grid.column3 = grid.column(3),
	grid.column4 = grid.column(4),
	grid.column5 = grid.column(5),
	grid.column6 = grid.column(6),
	grid.column7 = grid.column(7),
	grid.column8 = grid.column(8),
	grid.column9 = grid.column(9),


/* OLD VERSIONS OF COLUMN AND ROW GETTERS

----------COLUMN

function () {
	var column = [];
	for (var i = 1; i <= 81; i++) {
		if (	(i % 9) == 1	) {
			column.push(this[i]);
		}
	}
	return column;
},

---------ROW
function () {
	var row = [];
	for (var i = 1; i <= 81; i++) {
		if (	Math.ceil(i / 9) == 1 ) {
			row.push(this[i]);
		}
	}
	return row;
},

*/

	grid.box = function(boxNumber) {

		var xBoxNumber = boxNumber;
		var box = [];

		for (var i = 1; i <= 81; i++) {
			var row = Math.ceil(i/9);
			var col = i % 9;
			var boxValue = Math.floor(row/3) * 3 + Math.floor(col/3);

			if (boxValue == boxNumber) {
				box.push(this[i]);
			}
		}
		return box;
	},
	grid.box1 = grid.box(1);
	grid.box2 = grid.box(2);
	grid.box3 = grid.box(3);
	grid.box4 = grid.box(4);
	grid.box5 = grid.box(5);
	grid.box6 = grid.box(6);
	grid.box7 = grid.box(7);
	grid.box8 = grid.box(8);
	grid.box9 = grid.box(9);





	grid.prototype.cells = function () {
		return array;
	}
	grid.prototype.cells = function () {
		return array;
	}
	grid.prototype.cells = function () {
		return array;
	}
	grid.prototype.cells = function () {
		return array;
	}
	grid.prototype.cells = function () {
		return array;
	}
	grid.prototype.cells = function () {
		return array;
	}
	grid.prototype.cells = function () {
		return array;
	}

	return grid;

})();



var grid1 = new Grid(string)

grid1.cells()

grid1.0.update(newvalues) => this._(newvalue)

grid1.update(0, newvalues)
