# Bank Challenge - Matt


#### How to Run

1. Fork then clone this Github repository
2. `npm install`
3. Type commands in main.js (examples given)
4. Run using `node main.js`
5. Run tests using `npm test`


### Requirements

*  Interact with the code via the JavaScript console.
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data kept in memory (not stored in a database).


### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Domain Model

See the included screenshot for the domain model!

#### Standard
- [x] Meets the spec
- [x] Developed test-first
- [x] Passes tests
- [ ] Code is linted
- [x] Encapsulates adding and storing Transactions in a class (Customer)
- [x] Encapsulates Statement formatting in a class
- [x] Encapsulates Transaction data in a class

