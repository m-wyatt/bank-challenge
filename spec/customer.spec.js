import { Customer } from '../src/customer.js';

describe('Customer Tests:', () => {
    it('should be able to return customer name property', () => {
        // Setup
        const testInput = 'George';
        const testCustomer = new Customer(testInput);
        // Evaluate
        const actual = testCustomer.getName();
        // Verify
        expect(actual).toBe(testInput);

    })

    it('should have string type customer name property', () => {
        // Setup
        const testInput = 1;
        const testCustomer = new Customer(testInput);
        // Evaluate
        const actual = testCustomer.getName();
        // Verify
        expect(actual).toBeUndefined();

    })

    it('should return error if name argument not string', () => {
        // Setup
        const testInput = 1;
        // Evaluate
        const actual = new Customer(testInput);
        // Verify
        expect(function () { actual }).toThrow(new Error('Customer name must be a string.'));
    })
})