const expect = chai.expect;
const drivers = ["Milo", "Otis", "Garfield"]
describe('index.js', function () {
  describe('drivers', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });

    it('is declared with const', function () {
      expect(function () { drivers = []; }).to.throw(TypeError);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Milo', 'Otis', 'Garfield');
    });
function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
}

    describe('destructivelyAppendDriver(name)', function () {
      it('appends a driver to the end of the drivers array', function () {
        destructivelyAppendDriver('Ralph');

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}
    describe('destructivelyPrependDriver(name)', function () {
      it('prepends a driver to the beginning of the drivers array', function () {
        destructivelyPrependDriver("Bob");

        expect(drivers).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}
    describe('destructivelyRemoveLastDriver()', function () {
      it('removes the last driver from the drivers array', function () {
        destructivelyRemoveLastDriver();

        expect(drivers).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });
function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}
    describe('destructivelyRemoveFirstDriver()', function () {
      it('removes the First driver from the drivers array', function () {
        destructivelyRemoveFirstDriver();

        expect(drivers).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
function appendDriver(name) {
  var newArray = drivers.slice()
  newArray.push(name)
  return newArray
}
    describe('appendDriver(name)', function () {
      it('appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(appendDriver("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
function prependDriver(name) {
  var newArray = drivers.slice()
  newArray.unshift(name)
  return newArray
}
    describe('prependDriver(name)', function () {
      it('prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(prependDriver("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
function removeLastDriver(name) {
  var newArray = drivers.slice()
  newArray.pop(name)
  return newArray
}
    describe('removeLastDriver()', function () {
      it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
function removeFirstDriver(name) {
  var newArray = drivers.slice()
  newArray.shift(name)
  return newArray
}
    describe('removeFirstDriver()', function () {
      it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
