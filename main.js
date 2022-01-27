import { Customer } from './src/customer.js';
import { Transaction } from './src/transaction.js';
import { Statement } from './src/statement.js';

// Create a new customer:
const customer1 = new Customer("Matt");
console.log(customer1.getName());

// Default balance is 0:
console.log(customer1.getCurrentBalance());

// Create customer with custom initial balance:
const customer2 = new Customer("Harry", 100);
console.log(customer2.getCurrentBalance());

// Create a new transaction:
const credit1 = new Transaction(new Date(), 200);
const debit1 = new Transaction(new Date(), -10);

// Add transaction to a customer's transaction history:
customer2.addTransaction(credit1);
console.log(customer2.getCurrentBalance()); // current balance updated
console.log(credit1.getNewBalance()); // transaction now also contains newBalance info

// Debit is void if brings customer balance below 0 (but still added to history):
customer1.addTransaction(debit1);
console.log(debit1.getNewBalance());

Statement.printHeading(40);
Statement.printHeading(2);

