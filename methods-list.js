//DIGITSET
//=============

function digitSet ( digit ) 			// => new DigitSet instance with possibility array of booleans
this.possibilities						// => array of 10 booleans

.update = function ( digit, boolean )	// => undefined
.size = function ()						// => number 0-9
.set = function ( array )				// => updated array of 10 booleans


//GRID
//=============

function grid ( initialString )			// => new Grid instance with 81 digitSets

.row  	 = function(rowNumber)		// => array of 10 digitSets
.row0 	 = this.row(0)				// => array of 10 specfic digitSets

.column  = function(columnNumber)	// => array of 10 digitSets
.column0 = this.column(0)			// => array of 10 specific digitSets

.box  	 = function(boxNumber)		// => array of 10 digitSets
.box0 	 = this.box(0);				// => array of 10 specific digitSets

.cells   = function()				// => array of 81 strings
.rows    = function()				// => array of 9 strings
.columns = function()				// => array of 9 strings
.boxes	 = function()				// => array of 9 strings 

.getRow()	   = function(cellToken)	// => string ex: 'this.row1'
.getColumn()   = function(cellToken)	// => string ex: 'this.column1'
.getBox()	   = function(cellToken)	// => string ex: 'this.box1'


//VIEWER
//=============

//we haven't started
