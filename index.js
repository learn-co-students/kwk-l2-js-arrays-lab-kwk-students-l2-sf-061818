// Write your solution here!
const drivers= ['Milo','Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newDrivers = [];
  newDrivers.push(drivers[0], drivers[1], drivers[2], name)
  return newDrivers
}

function prependDriver(name){
  let newDrivers = [];
  newDrivers.push(name, drivers[0], drivers[1], drivers[2])
  return newDrivers
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}