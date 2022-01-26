import { Customer } from '../src/customer.js';

describe('Customer Tests:', () => {
    it('should be able to return customer name property with getter', () => {
        // Setup
        const testInput = 'George';
        const testCustomer = new Customer(testInput);
        const expected = testInput;
        // Evaluate
        const actual = testCustomer.getName();
        // Verify
        expect(actual).toBe(expected);

    })

    it('should not be able to return customer name property directly', () => {
        // Setup
        const testInput = 'George';
        const testCustomer = new Customer(testInput);
        const expected = undefined;
        // Evaluate
        const actual = testCustomer.name;
        // Verify
        expect(actual).toBe(expected);

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
        const expected = new Error('Customer name must be a string.');
        // const createCustomerWithNumberName = () => new Customer(1);
        // Can't do above because throws error before able to reach verify...

        // Evaluate

        // Verify
        expect(function () { new Customer(testInput) }).toThrow(expected);
    })

    it('should be able to return customer balance property with getter', () => {
        // Setup
        const testInput = ["John", 10000];
        const testCustomer = new Customer(...testInput);
        const expected = testInput[1]
        // Evaluate
        const actual = testCustomer.getCurrentBalance();
        // Verify
        expect(actual).toBe(expected);

    })

    it('should not be able to return customer balance property directly', () => {
        // Setup
        const testInput = ['John', 10000];
        const testCustomer = new Customer(...testInput);
        const expected = undefined;
        // Evaluate
        const actual = testCustomer.name;
        // Verify
        expect(actual).toBe(expected);

    })

    it('should return error if customer balance argument not number', () => {
        // Setup
        const testInput = ["John", "not a number"];
        const expected = new Error('Current balance must be a number.');

        // Evaluate

        // Verify
        expect(function () { new Customer(...testInput) }).toThrow(expected);
    })

    it('should have empty default array of transactions', () => {
        // Setup
        const testCustomer = new Customer("John", 15000);
        const expected = 0;

        // Evaluate
        // This test slightly redundant now as almost identical to "access transactions through getter" below
        const actual = testCustomer.getTransactions.length;

        // Verify
        expect(actual).toBe(expected);

    })

    it("shouldn't return transactions when accessed directly", () => {
        // Setup
        const testCustomer = new Customer("John", 15000);
        const expected = undefined;

        // Evaluate
        const actual = testCustomer.transactions;

        // Verify
        expect(actual).toBe(expected);

    })

    it("should return transactions when accessed through getter", () => {
        // Setup
        const testCustomer = new Customer("John", 15000);
        const expected = 0;

        // Evaluate
        const actual = testCustomer.getTransactions.length;

        // Verify
        expect(actual).toBe(expected);

    })
});