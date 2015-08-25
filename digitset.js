DigitSet = ( function ( ) {

	function digitSet ( digit ) {
		var possibilities = [];
		possibilities.length = 9;

		possibilities.forEach( function(){ possibilities.this = false });

		if (digit !== '.' ) { 
			possibilities[digit] = true;
		}

		else {
			possibilities.forEach( function(){ possibilities.this = true });
		}

		return possibilities;
	}

	digitSet.prototype.update( digit ) {
		possibilities[ digit ] = true;
	}

	return digitSet;

})();

var example = '.94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..'


var first = new DigitSet(9);
first[9] === true // => true
first[1] === false // => false

first.update(7)