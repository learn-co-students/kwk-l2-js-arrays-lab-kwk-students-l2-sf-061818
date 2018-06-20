// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver() {
  drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function appendDriver(name) {
  newarray = [];
  newarray.push(drivers[0], drivers[1], drivers[2], name);
  return newarray;
}
function prependDriver(name) {
  newarray2 = [];
  newarray2.push(drivers[0], drivers[1], drivers[2]);
  newarray2.unshift(name);
  return newarray2;
}
function removeLastDriver() {
  newarray3 = [];
  newarray3.push(drivers[0], drivers[1], drivers[2]);
  newarray3.pop();
  return newarray3;
}
function removeFirstDriver() {
  newarray4 = [];
  newarray4.push(drivers[0], drivers[1], drivers[2]);
  newarray4.shift();
  return newarray4;
}
