// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name)
}
// destructivelyAppendDriver("Ralph");
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
//destructivelyPrependDriver("Bob");
function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}
//destructivelyRemoveLastDriver();
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
  const newDrivers = []
  newDrivers.push(drivers[0], drivers[1], drivers[2], name)
  return newDrivers
}
//appendDriver("Bob");
function prependDriver(name){
  const newDrivers = []
  newDrivers.push(name, drivers[0], drivers[1], drivers[2])
  return newDrivers
}
//prependDriver("Arnold");
function removeLastDriver(){
  const newDrivers = []
  newDrivers.push(drivers[0], drivers[1])
  return newDrivers
}
//removeLastDriver();
function removeFirstDriver(){
  const newDrivers = []
  newDrivers.push(drivers[1], drivers[2])
  return newDrivers}
//removeFirstDriver();