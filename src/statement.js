export class Statement {
    static printHeading(columnWidth) {
        const spacerWidth = columnWidth - 8 > 0 ? columnWidth - 8 : 1;
        const columnSpacer = " ".repeat(spacerWidth);
        const heading = "date       || credit " + columnSpacer + "|| debit  " + columnSpacer + "|| balance" + columnSpacer;
        console.log(heading);
    }
};