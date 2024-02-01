// Your code here
const chai = require('chai')
const { reciprocal, returnsThree } = require('../problems/number-fun')
const expect = chai.expect


describe('returnsThree()', () => {
    it('should return the number 3', () => {
        const input = returnsThree();
        const expected = 3;
        expect(input).to.equal(expected)
    })
})

describe('reciprocal(num)',() => {
    context('valid arguments', () => {
        it('should return the reciprocal of the number', () => {
            const input1 = reciprocal(2);
            const input2 = reciprocal(5);
            const expected1 = 0.5;
            const expected2 = 0.2;
            expect(input1).to.equal(expected1)
            expect(input2).to.equal(expected2)
        })
    })
    context('invalid arguments', () => {
        it('should return a RangeError', () => {
            const input1 = reciprocal(0)
            const input2 = reciprocal(1000001)
            const expected1 = 'RangeError: Please enter a number greater than 1'
            const expected2 = 'RangeError: Please enter a number less than 1000001'
            expect(input1).to.equal(expected1)
            expect(input2).to.equal(expected2)
        })
    })
} )
