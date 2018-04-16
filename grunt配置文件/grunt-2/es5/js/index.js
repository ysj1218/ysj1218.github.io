"use strict";

function add(a, b) {
	var m = a;
	var n = b;
	return m + n;
}

var c = add(3, 6);
console.log(c);

function Count() {}

Count.prototype = {
	init: function init(a, b) {
		undefined.add();
		undefined.minus();
		undefined.multi();
		undefined.division();
	},
	add: function add(a, b) {
		return a + b;
	},
	minus: function minus(a, b) {
		return a - b;
	},
	multi: function multi(a, b) {
		return a * b;
	},
	division: function division(a, b) {
		return a / b;
	}
};

var count = new Count();
count.init();
