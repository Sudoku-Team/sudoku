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
	}

	return digitSet;

})();

module.exports = DigitSet;