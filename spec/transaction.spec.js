import { Transaction } from '../src/transaction.js';

describe('Transaction Tests:', () => {
    it('should be able to return transaction date property with getter', () => {
        // Setup
        const testInput = [new Date(), 5];
        const testTransaction = new Transaction(...testInput);
        const expected = testInput[0];
        // Evaluate
        const actual = testTransaction.getDate();
        // Verify
        expect(actual).toBe(expected);

    })

    it('should not be able to return transaction date property directly', () => {
        // Setup
        const testInput = [new Date(), 5];
        const testTransaction = new Transaction(...testInput);
        const expected = undefined;
        // Evaluate
        const actual = testTransaction.date;
        // Verify
        expect(actual).toBe(expected);

    })


    it('should return error if date parameter not instance of Date object', () => {
        // Setup
        const testInput = "26/01/22";
        const expected = new Error('Transaction date must be instance of Date object.');
        // Evaluate

        // Verify
        expect(function () { new Transaction(testInput) }).toThrow(expected);
    })

    it('should be able to return transaction amount with getter', () => {
        // Setup
        const testInput = [new Date(), 10];
        const testTransaction = new Transaction(...testInput);
        const expected = testInput[1];
        // Evaluate
        const actual = testTransaction.getAmount();
        // Verify
        expect(actual).toBe(expected);

    })

    it('should not be able to return transaction amount directly', () => {
        // Setup
        const testInput = [new Date(), 10];
        const testTransaction = new Transaction(...testInput);
        const expected = undefined
        // Evaluate
        const actual = testTransaction.amount;
        // Verify
        expect(actual).toBe(expected);

    })

    it('should return error if transaction amount is not a number', () => {
        // Setup
        const testInput = [new Date(), "not a number"];
        const expected = new Error('Transaction amount must be a number.');

        // Evaluate

        // Verify
        expect(function () { new Transaction(...testInput) }).toThrow(expected);
    });

    // 2. DO TEST FOR getNewBalance()
    // 3. DO TEST FOR customer.addTransaction()

});
