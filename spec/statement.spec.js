import { Statement } from '../src/statement.js'
import { Transaction } from '../src/transaction.js'


class MockTransaction {
    date = new Date();
    amount = "20";
    newBalance = "50";
    getDate = () => { };
    getAmount = () => { };
    getNewBalance = () => { };

};

const mockTransaction1 = new MockTransaction();
const mockTransaction2 = new MockTransaction();
const mockTransaction3 = new MockTransaction();
mockTransaction2.newBalance = 70;
mockTransaction3.amount = -10;
mockTransaction3.newBalance = 60;

class MockCustomer {
    transactions = [mockTransaction1, mockTransaction2, mockTransaction3];
};

// QUESTION: Is it okay to create a mock containing other mocks like this? Is there a more standard way?



describe('Statement Tests: ', () => {
    it('should print statement heading with static method', () => {
        // Setup
        const printHeadingSpy = spyOn(Statement, 'printHeading').and.callThrough();
        const consoleLogSpy = spyOn(console, 'log').and.callThrough();
        const input = 20;

        // Execute
        Statement.printHeading(input);

        // Verify
        expect(printHeadingSpy).toHaveBeenCalledOnceWith(input);
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    })

    it('should print single transaction with static method', () => {
        // Setup
        const testTransaction = new MockTransaction();
        const input = [testTransaction, 20];

        const printTransactionSpy = spyOn(Statement, 'printTransaction').and.callThrough();
        const consoleLogSpy = spyOn(console, 'log').and.callThrough();

        const getDateSpy = spyOn(testTransaction, 'getDate').and.returnValue(testTransaction.date);
        const getAmountSpy = spyOn(testTransaction, 'getAmount').and.returnValue(testTransaction.amount);
        const getNewBalanceSpy = spyOn(testTransaction, 'getNewBalance').and.returnValue(testTransaction.newBalance);

        // Execute
        Statement.printTransaction(...input);

        // Verify
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(getDateSpy).toHaveBeenCalled();
        expect(getAmountSpy).toHaveBeenCalled();
        expect(getNewBalanceSpy).toHaveBeenCalled();

        // QUESTION: Does this actually test that printTransaction does what I want? Should I be checking exact output of console.log too?
    })

    it('should print customer statement with static method', () => {
        // Setup
        const printStatementSpy = spyOn(Statement, 'printStatement').and.callThrough();
        const consoleLogSpy = spyOn(console, 'log').and.callThrough();
        const testCustomer = new MockCustomer();
        const input = testCustomer;
        const expected = testCustomer.transactions.length + 1;

        // Execute
        Statement.printStatement(input);

        // Verify
        expect(consoleLogSpy).toHaveBeenCalledTimes(expected);
    })
})
