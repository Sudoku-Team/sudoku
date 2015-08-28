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

	digitSet.prototype.update = function ( digit, boolean ) {
		this.possibilities[ digit ] = boolean;
	}

	digitSet.prototype.size = function (){
		//how many numbers are still possible here?
		var array = [];

		for ( var i = 0; i < 10; i++ ){
			if ( this.possibilities[i] === true ){
				array.push( this.possibilities[i] );
			}
		}

		return array.length;
	}

	digitSet.prototype.set = function ( array ) {

		//change all the numbers in the array to be possible
		//array = [0, 1, 2]
    	//this.possibilities = [false, false, false, false...]
    	//RETURN this.possibilities => [true, true, true, false...]
    	//does the key name = any value in array?
    	// i.e. does array have 0 as a value? then key 0 should be true


		for (var i = 0; i < 10; i++ ){

			for ( var j = 0; j < array.length; j++ ){
        if ( array[j] === i ){
					this.possibilities[i] = true;
				}
			}
		}

		return this.possibilities;
	}



	//This report true if more than one value of this.possibilities is true.
	//in other words, if more than one value is possible at a square,
	//the square IS uncertain.

    digitSet.prototype.isUncertain = function() {

     	var array = [];

      	for (var i = 0; i < 10; i++){

        	if ( this.possibilities[i] === true ){
        		array.push( "i: " + i + ' true' )
        	}
		}

		if (array.length > 1) {
			return true;
    	}

    	else {
    		return false;
    	}
	}

	digitSet.prototype.array = function () {
		var array = [];

		for (var i = 0; i < 10; i++){

        	if ( this.possibilities[i] === true ){
        		array.push( i );
        	}
        	else {
        		array.push( '.' );
        	}
		}

		return array;
	}

	digitSet.prototype.string = function () {
		var array = [];

		for (var i = 0; i < 10; i++){

        	if ( this.possibilities[i] === true ){
        		array.push( i );
        	}
        	else {
        		array.push( '.' );
        	}
		}

		var string = array.join(' ');

		return string;
	}

	return digitSet;

})();
