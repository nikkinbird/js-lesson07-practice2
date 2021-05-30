var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

/* stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(`${index}: ${item}`);
  }
});  */

var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (array.includes(item)) {
    array.splice(index, 1);
    console.log(`"${item}" was removed from the array.`);
  } else {
    console.log(`"${item}" does not exist in the array.`);
  }
};

removeItem(stuff, "cats");

removeItem(stuff, "coffee");

console.log(stuff);
