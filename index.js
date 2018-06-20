const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
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
  return [...drivers, name];
}

function prependDriver(name) {
  var newDrivers = [];
  newDrivers.unshift(name, drivers[0], drivers[1], drivers[2]);
  return newDrivers;
}

function removeFirstDriver() {
  return drivers.slice(1);
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}