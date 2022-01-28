import { Statement } from '../src/statement.js'
import { Transaction } from '../src/transaction.js'

class MockDate {
    toLocaleDateString() {
        return '28/01/2022';
    };

    // NOTE: I don't think methods defined with arrow functions as below are actually working:
    // toLocaleDateString = () => {'28/01/2022'};
    // If use above the statement is printed with date=undefined in the test output
}

class MockTransaction {
    date = new MockDate();
    amount = "20";
    newBalance = "50";
    getDate = () => { };
    getAmount = () => { };
    getNewBalance = () => { };
    // Don't think above methods declarations work properly but doesn't matter since using .and.returnValue() anyway...

};

const mockTransaction1 = new MockTransaction();
const mockTransaction2 = new MockTransaction();
const mockTransaction3 = new MockTransaction();
mockTransaction2.newBalance = 70;
mockTransaction3.amount = -10;
mockTransaction3.newBalance = 60;

class MockCustomer {
    transactions = [mockTransaction1, mockTransaction2, mockTransaction3];

    getTransactions = () => { };
};

// QUESTION: Is it okay to create a mock containing other mocks like this? Is there a more standard way?



describe('Statement Tests: ', () => {
    it('should print statement heading with static method', () => {
        // Setup
        const consoleLogSpy = spyOn(console, 'log')
        const input = 20;

        // Execute
        Statement.printHeading(input);

        // Verify
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    })

    it('should print single transaction with static method', () => {
        // Setup
        const testTransaction = new MockTransaction();
        const input = [testTransaction, 20];

        const consoleLogSpy = spyOn(console, 'log').and.callThrough();
        // QUESTION: How to call through console.log on a new line so test results display more nicely?

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
        const testCustomer = new MockCustomer();
        const input = testCustomer;
        const expected = testCustomer.transactions.length + 1;

        const consoleLogSpy = spyOn(console, 'log').and.callThrough();
        const getTransactionsSpy = spyOn(testCustomer, 'getTransactions').and.returnValue(testCustomer.transactions);

        // There has to be a better way than spying on every single mock transaction.....
        // At this point it's no different to adding the methods from Transaction to Mock Transaction in full

        // Mock transaction 1 spies
        const getDateSpy1 = spyOn(mockTransaction1, 'getDate').and.returnValue(mockTransaction1.date);
        const getAmountSpy1 = spyOn(mockTransaction1, 'getAmount').and.returnValue(mockTransaction1.amount);
        const getNewBalanceSpy1 = spyOn(mockTransaction1, 'getNewBalance').and.returnValue(mockTransaction1.newBalance);

        // Mock transaction 2 spies
        const getDateSpy2 = spyOn(mockTransaction2, 'getDate').and.returnValue(mockTransaction2.date);
        const getAmountSpy2 = spyOn(mockTransaction2, 'getAmount').and.returnValue(mockTransaction2.amount);
        const getNewBalanceSpy2 = spyOn(mockTransaction2, 'getNewBalance').and.returnValue(mockTransaction2.newBalance);

        // Mock transaction 3 spies
        const getDateSpy3 = spyOn(mockTransaction3, 'getDate').and.returnValue(mockTransaction3.date);
        const getAmountSpy3 = spyOn(mockTransaction3, 'getAmount').and.returnValue(mockTransaction3.amount);
        const getNewBalanceSpy3 = spyOn(mockTransaction3, 'getNewBalance').and.returnValue(mockTransaction3.newBalance);

        // Execute
        Statement.printStatement(input);

        // Verify
        expect(consoleLogSpy).toHaveBeenCalledTimes(expected);
        expect(getTransactionsSpy).toHaveBeenCalled();
        // Should probably check all (9) of the above spies have been called too but not sure if necessary
    })
})
