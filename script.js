let MyMath = { // create a MyMath object with the properties a and b
	a: 5,
	b: 2,
	sum: function () { // method to calculate the sum of a and b
		let sum = this.a + this.b;
		console.log("a + b = " + sum);
	},
	multiplication: function () { // method to calculate the multiplication of a and b
		let multiplication = this.a * this.b;
		console.log("a * b = " + multiplication);
	},
	division: function () { // method to calculate the division of a by b
		let division = this.a / this.b;
		console.log("a / b = " + division);
	},
	subtraction: function () { // method for calculating the subtraction of a from b
		let subtraction = this.a - this.b;
		console.log("a - b = " + subtraction);
	}
};

MyMath.sum(); // calls the sum method
MyMath.multiplication(); // calls the multiplication method
MyMath.division(); // calls the division method
MyMath.subtraction(); // calls the subtraction method