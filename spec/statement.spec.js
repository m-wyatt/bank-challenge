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
})
