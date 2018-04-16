function add(a, b) {
	const m = a;
	const n = b;
	return m + n;
}

const c = add(3, 6);
console.log(c);

function Count() {}

Count.prototype = {
	init: (a, b) => {
		this.add();
		this.minus();
		this.multi();
		this.division();
	},
	add: (a, b) => {
		return a + b;
	},
	minus: (a, b) => {
		return a - b;
	},
	multi: (a, b) => {
		return a * b;
	},
	division: (a, b) => {
		return a / b;
	},
}

var count = new Count();
count.init();