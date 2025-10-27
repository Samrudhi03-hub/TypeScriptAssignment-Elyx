// TypeScript Assignment
// 1.Programming Challenge
// 1.1 Find the Missing Digit in an Arithmetic Expression
function findMissingDigit(expression) {
    for (var digit = 0; digit <= 9; digit++) {
        // replace '?' with each digit from 0 to 9
        var testExp = expression.replace("?", digit.toString());
        // split equation into left and right parts
        var _a = testExp.split("="), left = _a[0], right = _a[1];
        // check if left side = right side
        if (eval(left.trim()) === Number(right.trim())) {
            console.log("".concat(testExp, " -> Missing digit = ").concat(digit));
        }
    }
}
findMissingDigit("4? + 12 = 58");
// 1.2 Print the Number Pattern (Without Loops)
// function printPattern(n: number, i: number = n): void {
//   if (i < 1) return;
//   const row: string = buildRow(i, i, "down");
//   console.log(row);
//   printPattern(n, i - 1);
// }
// function buildRow(i: number, j: number = i, direction: "down" | "up" = "down"): string {
//   if (direction === "down") {
//     if (j === 0) return "";
//     if (j === 1) return "1 " + buildRow(i, 2, "up");
//     return j + " " + buildRow(i, j - 1, "down");
//   } else {
//     if (j > i) return "";
//     return j + " " + buildRow(i, j + 1, "up");
//   }
// }
// console.log("Pattern for n = 5:");
// printPattern(5);
// // 1.3. Find the Nth Digit in a Number Sequence
// function findNthDigit(N : number) {  //N= 11
//   let sequence : String = "1234567891011";
//   console.log(`The ${N}th digit is: ${sequence[N-1]}`);
// }
// findNthDigit(11);
// // 1.4. Check If a Number is a Power of 4
// function isPowerOfFour(n: number) {
//   if (n <= 0) return false;
//   let isPowerOfTwo : boolean= (n & (n - 1)) === 0;
//   let divisibleBy3 : boolean= (n - 1) % 3 === 0;
//   return isPowerOfTwo && divisibleBy3;
// }
// console.log(isPowerOfFour(64)); // true
// console.log(isPowerOfFour(8));  // false
// // 1.5. Find the Single Non-Repeating Number
// function findSingleNumber(arr: number[]): void {
//   let result: number = 0;
//   for (let num of arr) {
//     result ^= num; // XOR each number
//   }
//   console.log("Single non-repeating number:", result);
// }
// findSingleNumber([4, 3, 2, 4, 1, 3, 2]);
// // 2. OOP-Based Interactive Programming Problems
// // 2.1 Bank Application
// class Account {
//   private name: string;
//   private balance: number;
//   private transactions: string[];
//   constructor(name: string, initialDeposit: number = 0) {
//     this.name = name;
//     this.balance = initialDeposit;
//     this.transactions = [`Account created with the amount Rs${initialDeposit}`];
//   }
//   getName(): string {
//     return this.name;
//   }
//   deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//       this.transactions.push(`Deposited Rs${amount}`);
//       console.log(`${amount} deposited to ${this.name}'s account`);
//     } else {
//       console.log("Enter valid amount");
//     }
//   }
//   withdraw(amount: number): void {
//     if (amount > this.balance) {
//       console.log("Insufficient funds");
//     } else if (amount > 0) {
//       this.balance -= amount;
//       this.transactions.push(`Withdrawn Rs${amount}`);
//       console.log(`${amount} withdrawn from ${this.name}'s account`);
//     } else {
//       console.log("Enter valid amount");
//     }
//   }
//   showBalance(): void {
//     console.log(`The balance of ${this.name}'s account is: Rs${this.balance}`);
//   }
//   showHistory(): void {
//     console.log(`The transaction history of ${this.name}'s account is:`);
//     this.transactions.forEach((t, i) => {
//       console.log(`${i + 1}. ${t}`);
//     });
//   }
// }
// class Bank {
//   private accounts: Account[];
//   constructor() {
//     this.accounts = [];
//   }
//   createAccount(name: string, amount: number): void {
//     const existing = this.accounts.find((acc) => acc.getName() === name);
//     if (existing) {
//       console.log("Account already exists");
//       return;
//     } else {
//       const account = new Account(name, amount);
//       this.accounts.push(account);
//       console.log(`Account created for ${name} with amount Rs${amount}`);
//     }
//   }
//   depositMoney(name: string, amount: number): void {
//     const acc = this.accounts.find((acc) => acc.getName() === name);
//     if (acc) {
//       acc.deposit(amount);
//     } else {
//       console.log("Account not found");
//     }
//   }
//   withdrawMoney(name: string, amount: number): void {
//     const acc = this.accounts.find((acc) => acc.getName() === name);
//     if (acc) {
//       acc.withdraw(amount);
//     } else {
//       console.log("Account not found");
//     }
//   }
//   showBalance(name: string): void {
//     const acc = this.accounts.find((acc) => acc.getName() === name);
//     if (acc) {
//       acc.showBalance();
//     } else {
//       console.log("Account not found");
//     }
//   }
//   showHistory(name: string): void {
//     const acc = this.accounts.find((acc) => acc.getName() === name);
//     if (acc) {
//       acc.showHistory();
//     } else {
//       console.log("Account not found");
//     }
//   }
//   searchAccount(name: string): void {
//     const acc = this.accounts.find((acc) => acc.getName() === name);
//     if (acc) {
//       console.log(`Account found with the name ${acc.getName()}`);
//     } else {
//       console.log("Account not found with that name");
//     }
//   }
// }
// const bank = new Bank();
// bank.createAccount("Samrudhi", 5000);
// bank.createAccount("Snehal", 10000);
// bank.depositMoney("Snehal", 2000);
// bank.withdrawMoney("Snehal", 2000);
// bank.showBalance("Snehal");
// bank.showHistory("Snehal");
// bank.searchAccount("Snehal");
// 2.2. Calculator Application
// class Calculator {
//   private _operator!: string;
//   private _firstNum!: number;
//   private _secondNum!: number;
//   constructor(operator: string, firstNum: number, secondNum: number) {
//     this.operator = operator;
//     this.firstNum = firstNum;
//     this.secondNum = secondNum;
//   }
//   get operator(): string {
//     return this._operator;
//   }
//   get firstNum(): number {
//     return this._firstNum;
//   }
//   get secondNum(): number {
//     return this._secondNum;
//   }
//   set operator(op: string) {
//     const validOp = ['+', '-', '*', '/'];
//     if (!validOp.includes(op)) {
//       console.log("Invalid operator");
//       return;
//     }
//     this._operator = op;
//   }
//   set firstNum(num: number) {
//     if (typeof num !== 'number') {
//       console.log("First Number should be numeric");
//       return;
//     }
//     this._firstNum = num;
//   }
//   set secondNum(num: number) {
//     if (typeof num !== 'number') {
//       console.log("Second Number should be numeric");
//       return;
//     }
//     this._secondNum = num;
//   }
//   calculate(): void {
//     switch (this._operator) {
//       case '+': console.log(`Addition: ${this._firstNum + this._secondNum}`); break;
//       case '-': console.log(`Subtraction: ${this._firstNum - this._secondNum}`); break;
//       case '*': console.log(`Multiplication: ${this._firstNum * this._secondNum}`); break;
//       case '/':
//         if (this._secondNum === 0) console.log("Cannot divide by zero!");
//         else console.log(`Division: ${this._firstNum / this._secondNum}`);
//         break;
//       default: console.log("Please enter a valid operator before calculation.");
//     }
//   }
// }
// const calc1 = new Calculator('*', 2, 4);
// calc1.calculate();
// // 2.3 Employee Payroll Management System
// class Employee {
//   private name: string;
//   private baseSalary: number;
//   private tax: number;
//   constructor(name: string, baseSalary: number, tax: number) {
//     this.name = name;
//     this.baseSalary = baseSalary;
//     this.tax = tax;
//   }
//   calculateNetSalary(): number {
//     if (!this.tax) {
//       console.log("Please enter valid tax percent in decimal!");
//       return this.baseSalary;
//     }
//     let taxableAmount = this.baseSalary * this.tax;
//     let net = this.baseSalary - taxableAmount;
//     return net;
//   }
//   showSalarySlip(): void {
//     console.log("------ Salary Slip ------");
//     console.log("Name:", this.name);
//     console.log("Base Salary:", this.baseSalary);
//     console.log("Tax:", this.baseSalary * this.tax);
//     console.log("Net Salary:", this.calculateNetSalary());
//   }
//   getName(): string {
//     return this.name;
//   }
// }
// let emp1 = new Employee("Alice", 5000, 0.1);
// emp1.showSalarySlip();
// // 2.4. Library Management System
// class Book {
//   private title: string;
//   private isIssued: boolean;
//   constructor(title: string) {
//     this.title = title;
//     this.isIssued = false;
//   }
//   issue(): void {
//     if (this.isIssued) {
//       console.log(`${this.title} is already issued.`);
//       return;
//     }
//     this.isIssued = true;
//     console.log(`${this.title} issued successfully.`);
//   }
//   returnBook(): void {
//     if (!this.isIssued) {
//       console.log(`${this.title} was not issued.`);
//       return;
//     }
//     this.isIssued = false;
//     console.log(`${this.title} returned successfully.`);
//   }
//   isAvailable(): boolean {
//     return !this.isIssued;
//   }
//   getTitle(): string {
//     return this.title;
//   }
// }
// class Library {
//   private books: Book[] = [];
//   addBook(title: string): void {
//     this.books.push(new Book(title));
//     console.log(`Added book ${title}`);
//   }
//   showAvailableBooks(): void {
//     console.log("Available Books:");
//     this.books.filter(book => book.isAvailable())
//       .forEach(book => console.log("• " + book.getTitle()));
//   }
//   searchBook(title: string): void {
//     let book = this.books.find(b => b.getTitle() === title);
//     console.log(book ? `${title} found` : `No book named ${title}`);
//   }
//   issueBook(title: string): void {
//     let book = this.books.find(b => b.getTitle() === title);
//     if (book) book.issue();
//     else console.log(`No such book found.`);
//   }
//   returnBook(title: string): void {
//     let book = this.books.find(b => b.getTitle() === title);
//     if (book) book.returnBook();
//     else console.log(`No such book found.`);
//   }
// }
// const library = new Library();
// library.addBook("The Great Gatsby");
// library.addBook("1984");
// library.issueBook("The Great Gatsby");
// library.returnBook("The Great Gatsby");
// library.showAvailableBooks();
// library.searchBook("1984");
// // 2.5. ATM Simulation
// interface Transaction {
//   type: string;
//   amount: number;
//   date: Date;
// }
// class ATM {
//   private pin: number;
//   private balance: number;
//   private transactions: Transaction[] = [];
//   constructor(pin: number, initialBalance: number = 0) {
//     this.pin = pin;
//     this.balance = initialBalance;
//   }
//   authenticate(enteredPin: number): boolean {
//     return this.pin === enteredPin;
//   }
//   deposit(amount: number): void {
//     this.balance += amount;
//     this.transactions.push({ type: "Deposit", amount, date: new Date() });
//     console.log(`Deposited Rs${amount}`);
//   }
//   withdraw(amount: number): void {
//     if (amount > this.balance) {
//       console.log("Insufficient funds!");
//       return;
//     }
//     this.balance -= amount;
//     this.transactions.push({ type: "Withdraw", amount, date: new Date() });
//     console.log(`Withdrawn Rs${amount}`);
//   }
//   checkBalance(): void {
//     console.log(`Current Balance: Rs${this.balance}`);
//   }
//   printMiniStatement(startDate?: string, endDate?: string): void {
//     console.log("Mini Statement:");
//     this.transactions.forEach(tx => {
//       let date = tx.date.toLocaleString();
//       if (
//         (!startDate || tx.date >= new Date(startDate)) &&
//         (!endDate || tx.date <= new Date(endDate))
//       ) {
//         console.log(`${date} - ${tx.type} Rs${tx.amount}`);
//       }
//     });
//   }
// }
// const atm = new ATM(1234, 1000);
// if (atm.authenticate(1234)) {
//   atm.deposit(500);
//   atm.withdraw(300);
//   atm.checkBalance();
//   atm.printMiniStatement();
// } else {
//   console.log("Invalid PIN!");
// }
