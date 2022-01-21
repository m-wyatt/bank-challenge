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
})