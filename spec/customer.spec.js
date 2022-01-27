import { Customer } from '../src/customer.js';

class MockTransaction {
    date = new Date();
    amount = 20;
    newBalance = 20; // James' currentBalance = 0, hence 0+20
    getAmount = () => { };
    setNewBalance = () => { };
}

class MockTransactionWithNullNewBalance {
    date = new Date();
    amount = 20;
    newBalance = null;
    getAmount = () => { };
    setNewBalance = () => { };
}


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

    it('should add a transaction to transactions array with a method', () => {
        // Setup
        const testCustomer = new Customer("James");
        const testTransaction = new MockTransaction();
        const expected = testTransaction;

        // Evaluate
        testCustomer.addTransaction(testTransaction);
        const actual = testCustomer.getTransactions();

        // Verify
        expect(actual).toContain(expected);
    })

    it('should return new balance when transaction added to transactions array', () => {
        // Setup
        const testCustomer = new Customer("James");
        const testTransaction = new MockTransaction();
        const expected = testTransaction.amount;

        // Evaluate
        const actual = testCustomer.addTransaction(testTransaction);

        // Verify
        expect(actual).toEqual(expected);
    })

    it('should change current balance to new balance when transaction added', () => {
        // Setup
        const testCustomer = new Customer("James");
        const testTransaction = new MockTransaction();
        const expected = testTransaction.newBalance;

        // Evaluate
        testCustomer.addTransaction(testTransaction);
        const actual = testCustomer.getCurrentBalance();

        // Verify
        expect(actual).toEqual(expected);
    })

    it('should calculate transaction newBalance when adding transaction', () => {
        // Setup
        const testTransaction = new MockTransactionWithNullNewBalance();
        const testCustomer = new Customer('James');
        const expected = 20 // = customer.currentBalance + transaction.amount

        // Evaluate
        testCustomer.addTransaction(testTransaction);
        const actual = testTransaction.newBalance;

        // Verify
        expect(actual).toEqual(expected);
    });

    // 1. DO TEST FOR addTransaction() **done**
    // 4. DO TEST FOR transactions is array of Transaction(s)
});