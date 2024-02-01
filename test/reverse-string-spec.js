const chai = require(`chai`);
const expect = chai.expect;
const reverseString = require(`../problems/reverse-string`);

describe("reverseString(string)", () => {
  it(`should return the reversed string`, () => {
    const input = reverseString("fun");
    const expected = "nuf";
    expect(input).to.eql(expected);
  })
})
