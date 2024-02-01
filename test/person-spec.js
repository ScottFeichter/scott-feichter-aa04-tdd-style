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
  })

  it(`should have a "age" property`, () => {
    expect(testPerson).to.have.property("age");
  })

  it(`should set the name property correctly`, () => {
    expect(testPerson.name).to.equal("testName");

  })
  it(`should set the age property correctly`, () => {
    expect(testPerson.age).to.equal(10);
  })

  it(`should return a greeting message with the Person name`, () => {
    expect(testPerson.sayHello()).to.equal(`Hello my name is testPerson`);
  })

  it(`should return a visit message with the other person's name`, () => {
    expect(testPerson.visit(testPerson2)).to.equal(`testPerson1 visited testPerson2`);
  })

  it(`should return a visit message with the other person's name switched`, () => {
    expect(testPerson.switchedVisit(testPerson2)).to.equal(`testPerson2 visited testPerson1`);
  })

  // testPerson1.sV(testPerson2)

  // sw(person2) {
  // return testPerson2.visit.call(testPerson2, this.testPerson1);
  // }


});
