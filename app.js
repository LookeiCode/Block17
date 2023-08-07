const coffeeMenu = [
  {
    name: "cappuccino",
    price: 8,
    seasonal: false,
  },
  {
    name: 'espresso',
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: 9,
    seasonal: true,
  },
  {
    name: "macchiato",
    price: 6,
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: 6,
    seasonal: false,
  },
  {
    name: 'frappe',
    price: 8,
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 1,
    seasonal: true,
  },
  {
    name: "Starbuck's best coffee",
    price: 100,
    seasonal: true,
  }
];


console.log(coffeeMenu.filter((coffee) => {
  if (coffee.price <= 5) {
    return true;
  }

  return false;
}))


// 4. Print an array of drinks that are priced at an even number.
console.log(coffeeMenu.filter((coffee) => {
  if (coffee.price % 2 === 0) {
    return true;
  }
  return false;
}))

// Print an array with all the drinks that are seasonal.
console.log(coffeeMenu.filter((coffee) => {
  if (coffee.seasonal) {
    return true;
  }
  return false;
}))

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

console.log(coffeeMenu.map((coffee) => {

  if (coffee.seasonal) {
    return `${coffee.name} with imported beans`;
  }
  return coffee.name;
}))

function someFunction(accumulator, currentValue) {
 return accumulator + currentValue.price
}

// 5. Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce(someFunction, 0);

console.log(total)

const someFunction = (a, b) => a + b;
