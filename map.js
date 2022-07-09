const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());


/*sem this

const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);*/