// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}


function appendDriver(name){
  var newDrivers = []
  newDrivers.push(drivers[0], drivers[1], drivers[2],name)
  return newDrivers
}

function prependDriver(name){
  var newDrivers = []
  newDrivers.unshift(name, drivers[0], drivers[1], drivers[2])
  return newDrivers
}

function removeLastDriver(){
  var newDrivers = []
  newDrivers.push(drivers[0], drivers[1], drivers[3])
  newDrivers.pop()
  return newDrivers
}

function removeFirstDriver(){
  var newDrivers = []
  newDrivers.push(drivers[0], drivers[1], drivers[2])
  newDrivers.shift()
  return newDrivers
}