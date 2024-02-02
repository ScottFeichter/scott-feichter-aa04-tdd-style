const chai = require("chai");
const expect = chai.expect;
const Person = require(`../problems/person`);

describe("Person", () => {
  beforeEach(() => {
    const testPerson = new Person("testName", 10);
    const testPerson2 = new Person("testName2", 20);
  });

  it(`should have a "name" property`, () => {
    expect(testPerson).to.have.property("name");
  });

  it(`should have a "age" property`, () => {
    expect(testPerson).to.have.property("age");
  });

  it(`should set the name property correctly`, () => {
    expect(testPerson.name).to.equal("testName");
  });
  it(`should set the age property correctly`, () => {
    expect(testPerson.age).to.equal(10);
  });

  it(`should return a greeting message with the Person name`, () => {
    expect(testPerson.sayHello()).to.equal(`Hello my name is testPerson`);
  });

  it(`should return a visit message with the other person's name`, () => {
    expect(testPerson.visit(testPerson2)).to.equal(
      `testPerson1 visited testPerson2`
    );
  });

  it(`should return a visit message with the other person's name switched`, () => {
    expect(testPerson.switchedVisit(testPerson2)).to.equal(
      `testPerson2 visited testPerson1`
    );
  });

  it(`should return an array of each returned string from sayHello()`, () => {
    const testPerson3 = new Person("testName3", 30);
    const testPeople = [testPerson, testPerson2];
    const returnedArr = Person.greetAll(testPeople);

    expect(returnedArr).to.equal([
      "Hello my name is testPerson2",
      "Hello my name is testPerson3",
    ]);
  });

  context(`if incoming arg is invalid`, () => {
    it(`should throw new TypeError with clear message`, () => {
      const notObj = [1, 2, 3];
      // expect(testPerson.update(notObj)).to.equal("invalid argument")
      expect(testPerson.update(notObj)).to.throw(TypeError);
    });
  });

  context(`if incoming arg is valid`, () => {
    it(`should update name and age`, () => {
      const obj = { name: "newTestName", age: 99 };
      testPerson.update(notObj);
      expect(testPerson.name).to.equal("newTestName");
      expect(testPerson.age).to.equal(99);
    });
    it(`should throw TypeError with msg if no name or age in obj`, () => {
      const obj = { city: "newTestName", rbi: 99 };
      testPerson.update(notObj);
      expect(testPerson.name).to.throw(TypeError);
      expect(testPerson.age).to.throw(TypeError);
    });
  });

  context(`if update() successful`, () => {
    it(`should return true`, () => {
      expect(testPerson.tryUpdate()).to.equal(true);
    });
  });

  context(`if update() not successful`, () => {
    it(`should return false`, () => {
      expect(testPerson.tryUpdate()).to.equal(false);
    });
  });
});
