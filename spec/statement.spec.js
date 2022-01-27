import { Statement } from '../src/statement.js'

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
        const printTransactionSpy = spyOn(Statement, 'printTransaction').and.callThrough();
        const consoleLogSpy = spyOn(console, 'log').and.callThrough();
        const input = 20;

        // Execute
        Statement.printTransaction(input);

        // Verify
        expect(printTransactionSpy).toHaveBeenCalledOnceWith(input);
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    })
})
