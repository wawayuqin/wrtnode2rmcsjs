function Car() { 
	
	this.turnLeft = function() { 
		console.log('left '); 
	}; 
        this.turnRight = function() { 
		console.log('right '); 
	}; 
        this.forward = function() { 
		console.log('forward '); 
	}; 
        this.back = function() { 
		console.log('back'); 
	}; 
}; 
module.exports = Car
