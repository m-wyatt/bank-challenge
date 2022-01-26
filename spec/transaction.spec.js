import { Transaction } from '../src/transaction.js';

describe('Transaction Tests:', () => {
    it('should be able to return transaction date property with getter', () => {
        // Setup
        const testInput = new Date();
        const testTransaction = new Transaction(testInput);
        // Evaluate
        const actual = testTransaction.getName();
        // Verify
        expect(actual).toBe(testInput);

    })

    it('should not be able to return transaction date property directly', () => {
        // Setup
        const testInput = new Date();
        const testTransaction = new Transaction(testInput);
        // Evaluate
        const actual = testTransaction.date;
        // Verify
        expect(actual).toBe(undefined);

    })


    it('should return error if date parameter not instance of Date object', () => {
        // Setup
        const testInput = "26/01/22";

        // Evaluate

        // Verify
        expect(function () { new Transaction(testInput) }).toThrow(new Error('Transaction date must be instance of Date object.'));
    })

    it('should be able to return transaction amount with getter', () => {
        // Setup
        const testInput = [new Date(), 10];
        const testTransaction = new Transaction(...testInput);
        // Evaluate
        const actual = testTransaction.getAmount();
        // Verify
        expect(actual).toBe(testInput[1]);

    })

    it('should not be able to return transaction amount directly', () => {
        // Setup
        const testInput = [new Date(), 10];
        const testTransaction = new Transaction(...testInput);
        // Evaluate
        const actual = testTransaction.amount;
        // Verify
        expect(actual).toBe(undefined);

    })

    it('should return error if transaction amount is not a number', () => {
        // Setup
        const testInput = [new Date(), "not a number"];

        // Evaluate

        // Verify
        expect(function () { new Transaction(...testInput) }).toThrow(new Error('Transaction amount must be a number.'));
    })
});
