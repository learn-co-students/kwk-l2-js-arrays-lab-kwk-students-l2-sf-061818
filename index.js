// Write your solution here!

const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const tay = drivers.concat(name);
  return tay
}
function prependDriver(name) {
  const tay = [name, ...drivers]
  return tay
}
function removeLastDriver(){
  let tay = drivers
  tay = tay.slice(0, drivers.length - 1)
  return tay
}
function removeFirstDriver() {
  let tay = drivers
  tay = tay.slice(1, drivers.length)
  return tay
}
// https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/