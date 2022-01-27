export class Statement {

    static printHeading(columnWidth) {
        const spacerWidth = columnWidth - 8 > 0 ? columnWidth - 8 : 1;
        const columnSpacer = " ".repeat(spacerWidth);
        const heading = "date       || credit " + columnSpacer + "|| debit  " + columnSpacer + "|| balance" + columnSpacer;
        console.log(heading);
    };

    static printTransaction(transaction, columnWidth) {

        const date = transaction.getDate().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        let credit = "";
        let debit = "";

        if (transaction.getAmount() > 0) {
            credit = transaction.getAmount().toString();
        } else {
            debit = (transaction.getAmount() * (-1)).toString();
        }

        const balance = transaction.getNewBalance().toString();

        console.log(date + "|| " + credit + " || " + debit + " || " + balance);
    };
};