var DigitSet = require( './digitset.js' );

Grid = ( function(){	//start of constructor

	function grid ( initialString ) {		//start of instance

		var initialValues = initialString.split('');	//convert starting game data to array

		for ( var i = 0; i < 81; i++ ){		//generate the digitSet squares
				this[i] = new DigitSet ( initialValues[ i ] );
		}


		//	GROUPING METHODS: ROW, COLUMN, BOXES
		//======================================================


		this.row = function(rowNumber) {	//anonymous row math
			var row = [];
			
			for (var i = 0; i < 81; i++) {
				if ( Math.floor( i/9 ) === rowNumber) {
					row.push(this[i]);
				}
			}

		    return row;
		}

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
			
			return column
		}
	  
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
		}
		  
	  	this.box0 = this.box(0);
	  	this.box1 = this.box(1);
	  	this.box2 = this.box(2);
	  	this.box3 = this.box(3);
	  	this.box4 = this.box(4);
	  	this.box5 = this.box(5);
	  	this.box6 = this.box(6);
	  	this.box7 = this.box(7);
	  	this.box8 = this.box(8);

	  	// QUERY METHODS
	  	//======================================================



	} //end of instance function

	return grid  //return an instance

}) () //end IFFE


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








