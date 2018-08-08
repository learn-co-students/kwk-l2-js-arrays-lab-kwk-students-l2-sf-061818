// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift();
}

function appendDriver(name){
  var driver1 = [];
  driver1 = drivers.slice(0);
  driver1.push(name);
  return driver1;
}

function prependDriver(name){
  var driver1 = [];
  driver1 = drivers.slice(0);
  driver1.unshift(name);
  return driver1;
}

function removeLastDriver(){
  var drive = [];
  drive = drivers.slice(0);
  drive.pop();
  return drive;
}

function removeFirstDriver(){
  var d = [];
  d = drivers.slice(0);
  d.shift();
  return d;
}