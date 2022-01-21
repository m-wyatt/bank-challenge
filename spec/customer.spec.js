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

    // it('should have string type customer name property', () => {
    //     // Setup
    //     const testInput = 1;
    //     const testCustomer = new Customer(testInput);
    //     // Evaluate
    //     const actual = testCustomer.getName();
    //     // Verify
    //     expect(actual).toBeUndefined();

    // })

    it('should return error if name argument not string', () => {
        // Setup
        const testInput = 1;
        // const createCustomerWithNumberName = () => new Customer(1);
        // Can't do above because throws error before able to reach verify...

        // Evaluate

        // Verify
        expect(function () { new Customer(1) }).toThrow(new Error('Customer name must be a string.'));
    })
})