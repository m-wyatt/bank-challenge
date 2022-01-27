export class Statement {

    static createSpacer = width => " ".repeat(width);

    static printHeading(columnWidth) {
        const spacerWidth = columnWidth - 8 > 0 ? columnWidth - 8 : 1;
        const columnSpacer = this.createSpacer(spacerWidth);
        const heading = "date      || credit " + columnSpacer + "|| debit  " + columnSpacer + "|| balance";
        console.log(heading);
    };

    static printTransaction(transaction, columnWidth) {

        const date = transaction.getDate().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        let credit = (transaction.getAmount() > 0) ? transaction.getAmount().toString() : "";
        let debit = (transaction.getAmount() <= 0) ? (transaction.getAmount() * (-1)).toString() : "";

        const balance = transaction.getNewBalance().toString();

        const creditSpacer = this.createSpacer(columnWidth - credit.length);
        const debitSpacer = this.createSpacer(columnWidth - debit.length);

        console.log(date + "|| " + credit + creditSpacer + "|| " + debit + debitSpacer + "|| " + balance);
    };

    static printStatement(customer) {

        const balanceMaxLength = Math.max(customer.getTransactions().map(transaction => {
            transaction.getNewBalance();
        }));
        const maxWidth = Math.max(balanceMaxLength, 8);
        // max width is either length of date = 10 or length of newBalance if it is > 10
        this.printHeading(maxWidth);
        customer.getTransactions().forEach(transaction => {
            this.printTransaction(transaction, maxWidth);
        });
    };
};