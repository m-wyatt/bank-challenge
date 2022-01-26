import { Customer } from '../src/customer.js';

describe('Customer Tests:', () => {
    it('should be able to return customer name property with getter', () => {
        // Setup
        const testInput = 'George';
        const testCustomer = new Customer(testInput);
        // Evaluate
        const actual = testCustomer.getName();
        // Verify
        expect(actual).toBe(testInput);

    })

    it('should not be able to return customer name property directly', () => {
        // Setup
        const testInput = 'George';
        const testCustomer = new Customer(testInput);
        // Evaluate
        const actual = testCustomer.name;
        // Verify
        expect(actual).toBe(undefined);

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
        expect(function () { new Customer(testInput) }).toThrow(new Error('Customer name must be a string.'));
    })

    it('should be able to return customer balance property with getter', () => {
        // Setup
        const testInput = ["John", 10000];
        const testCustomer = new Customer(...testInput);
        // Evaluate
        const actual = testCustomer.getCurrentBalance();
        // Verify
        expect(actual).toBe(testInput[1]);

    })

    it('should not be able to return customer balance property directly', () => {
        // Setup
        const testInput = ['John', 10000];
        const testCustomer = new Customer(...testInput);
        // Evaluate
        const actual = testCustomer.name;
        // Verify
        expect(actual).toBe(undefined);

    })

    it('should return error if customer balance argument not number', () => {
        // Setup
        const testInput = ["John", "not a number"];

        // Evaluate

        // Verify
        expect(function () { new Customer(...testInput) }).toThrow(new Error('Current balance must be a number.'));
    })
})