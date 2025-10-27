// TypeScript Assignment

// 1.Programming Challenge

// 1.1 Find the Missing Digit in an Arithmetic Expression

function findMissingDigit(expression: string): void {
  for (let digit = 0; digit <= 9; digit++) {
    // replace '?' with each digit from 0 to 9
    const testExp: string = expression.replace("?", digit.toString());
    
    // split equation into left and right parts
    const [left, right] = testExp.split("=") as [string, string];

    
    // check if left side = right side
    if (eval(left.trim()) === Number(right.trim())) {
      console.log(`${testExp} -> Missing digit = ${digit}`);
    }
  }
}

findMissingDigit("4? + 12 = 58");

// 1.2 Print the Number Pattern (Without Loops)

function printPattern(n: number, i: number = n): void {
  if (i < 1) return;

  const row: string = buildRow(i, i, "down");
  console.log(row);

  printPattern(n, i - 1);
}

function buildRow(i: number, j: number = i, direction: "down" | "up" = "down"): string {
  if (direction === "down") {
    if (j === 0) return "";
    if (j === 1) return "1 " + buildRow(i, 2, "up");
    return j + " " + buildRow(i, j - 1, "down");
  } else {
    if (j > i) return "";
    return j + " " + buildRow(i, j + 1, "up");
  }
}

console.log("Pattern for n = 5:");
printPattern(5);

// // 1.3. Find the Nth Digit in a Number Sequence

function findNthDigit(N : number) {  //N= 11
  let sequence : String = "1234567891011";

  console.log(`The ${N}th digit is: ${sequence[N-1]}`);
}

findNthDigit(11);

// // 1.4. Check If a Number is a Power of 4

function isPowerOfFour(n: number) {
  if (n <= 0) return false;

  let isPowerOfTwo : boolean= (n & (n - 1)) === 0;
  let divisibleBy3 : boolean= (n - 1) % 3 === 0;

  return isPowerOfTwo && divisibleBy3;
}

console.log(isPowerOfFour(64)); // true
console.log(isPowerOfFour(8));  // false

// // 1.5. Find the Single Non-Repeating Number

function findSingleNumber(arr: number[]): void {
  let result: number = 0;

  for (let num of arr) {
    result ^= num; // XOR each number
  }

  console.log("Single non-repeating number:", result);
}

findSingleNumber([4, 3, 2, 4, 1, 3, 2]);

// // 2. OOP-Based Interactive Programming Problems

// // 2.1 Bank Application

class Account {
  private name: string;
  private balance: number;
  private transactions: string[];

  constructor(name: string, initialDeposit: number = 0) {
    this.name = name;
    this.balance = initialDeposit;
    this.transactions = [`Account created with the amount Rs${initialDeposit}`];
  }

  getName(): string {
    return this.name;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push(`Deposited Rs${amount}`);
      console.log(`${amount} deposited to ${this.name}'s account`);
    } else {
      console.log("Enter valid amount");
    }
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else if (amount > 0) {
      this.balance -= amount;
      this.transactions.push(`Withdrawn Rs${amount}`);
      console.log(`${amount} withdrawn from ${this.name}'s account`);
    } else {
      console.log("Enter valid amount");
    }
  }

  showBalance(): void {
    console.log(`The balance of ${this.name}'s account is: Rs${this.balance}`);
  }

  showHistory(): void {
    console.log(`The transaction history of ${this.name}'s account is:`);
    this.transactions.forEach((t, i) => {
      console.log(`${i + 1}. ${t}`);
    });
  }
}

class Bank {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  createAccount(name: string, amount: number): void {
    const existing = this.accounts.find((acc) => acc.getName() === name);
    if (existing) {
      console.log("Account already exists");
      return;
    } else {
      const account = new Account(name, amount);
      this.accounts.push(account);
      console.log(`Account created for ${name} with amount Rs${amount}`);
    }
  }

  depositMoney(name: string, amount: number): void {
    const acc = this.accounts.find((acc) => acc.getName() === name);
    if (acc) {
      acc.deposit(amount);
    } else {
      console.log("Account not found");
    }
  }

  withdrawMoney(name: string, amount: number): void {
    const acc = this.accounts.find((acc) => acc.getName() === name);
    if (acc) {
      acc.withdraw(amount);
    } else {
      console.log("Account not found");
    }
  }

  showBalance(name: string): void {
    const acc = this.accounts.find((acc) => acc.getName() === name);
    if (acc) {
      acc.showBalance();
    } else {
      console.log("Account not found");
    }
  }

  showHistory(name: string): void {
    const acc = this.accounts.find((acc) => acc.getName() === name);
    if (acc) {
      acc.showHistory();
    } else {
      console.log("Account not found");
    }
  }

  searchAccount(name: string): void {
    const acc = this.accounts.find((acc) => acc.getName() === name);
    if (acc) {
      console.log(`Account found with the name ${acc.getName()}`);
    } else {
      console.log("Account not found with that name");
    }
  }
}

const bank = new Bank();

bank.createAccount("Samrudhi", 5000);
bank.createAccount("Snehal", 10000);

bank.depositMoney("Snehal", 2000);
bank.withdrawMoney("Snehal", 2000);

bank.showBalance("Snehal");
bank.showHistory("Snehal");
bank.searchAccount("Snehal");


// 2.2. Calculator Application

class Calculator {
  private _operator!: string;
  private _firstNum!: number;
  private _secondNum!: number;

  constructor(operator: string, firstNum: number, secondNum: number) {
    this.operator = operator;
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  }

  get operator(): string {
    return this._operator;
  }

  get firstNum(): number {
    return this._firstNum;
  }

  get secondNum(): number {
    return this._secondNum;
  }

  set operator(op: string) {
    const validOp = ['+', '-', '*', '/'];
    if (!validOp.includes(op)) {
      console.log("Invalid operator");
      return;
    }
    this._operator = op;
  }

  set firstNum(num: number) {
    if (typeof num !== 'number') {
      console.log("First Number should be numeric");
      return;
    }
    this._firstNum = num;
  }

  set secondNum(num: number) {
    if (typeof num !== 'number') {
      console.log("Second Number should be numeric");
      return;
    }
    this._secondNum = num;
  }

  calculate(): void {
    switch (this._operator) {
      case '+': console.log(`Addition: ${this._firstNum + this._secondNum}`); break;
      case '-': console.log(`Subtraction: ${this._firstNum - this._secondNum}`); break;
      case '*': console.log(`Multiplication: ${this._firstNum * this._secondNum}`); break;
      case '/':
        if (this._secondNum === 0) console.log("Cannot divide by zero!");
        else console.log(`Division: ${this._firstNum / this._secondNum}`);
        break;
      default: console.log("Please enter a valid operator before calculation.");
    }
  }
}

const calc1 = new Calculator('*', 2, 4);
calc1.calculate();

// 2.3 Employee Payroll Management System

class Employee {
  #name: string;
  #baseSalary: number;
  #tax: number;

  constructor(name: string, baseSalary: number, tax: number) {
    this.#name = name;
    this.#baseSalary = baseSalary;
    this.#tax = tax; // store tax rate (e.g. 0.1 for 10%)
  }

  // get employee name (for searching)
  getName(): string {
    return this.#name;
  }

  // calculate salary after tax
  calculateNetSalary(): number {
    if (this.#tax <= 0 || this.#tax >= 1) {
      console.log("Please enter valid tax percent in decimal (e.g. 0.1 for 10%)");
      return this.#baseSalary;
    }

    const taxAmount = this.#baseSalary * this.#tax;
    const netSalary = this.#baseSalary - taxAmount;
    return netSalary;
  }

  // show salary slip
  showSalarySlip(): void {
    console.log("------ Salary Slip ------");
    console.log("Name:", this.#name);
    console.log("Base Salary: Rs", this.#baseSalary);
    console.log("Tax Deduction: Rs", this.#baseSalary * this.#tax);
    console.log("Net Salary: Rs", this.calculateNetSalary());
  }
}

// Payroll Manager class to manage multiple employees
class PayrollSystem {
  private employees: Employee[];

  constructor() {
    this.employees = []; // store all Employee objects
  }

  // Add new employee
  addEmployee(name: string, baseSalary: number, tax: number): void {
    const newEmp = new Employee(name, baseSalary, tax);
    this.employees.push(newEmp);
    console.log(`Employee "${name}" added successfully.`);
  }

  // Calculate salary for an employee
  calculateSalary(name: string): void {
    const emp = this.employees.find((e) => e.getName() === name);
    if (emp) {
      const net = emp.calculateNetSalary();
      console.log(`Net Salary for ${name}: Rs${net}`);
    } else {
      console.log(`No employee found with name "${name}".`);
    }
  }

  // Show full salary slip
  showSalarySlip(name: string): void {
    const emp = this.employees.find((e) => e.getName() === name);
    if (emp) {
      emp.showSalarySlip();
    } else {
      console.log(`No employee found with name "${name}".`);
    }
  }

  // Search employee by name
  searchEmployee(name: string): void {
    const emp = this.employees.find((e) => e.getName() === name);
    if (emp) {
      console.log(`Employee "${name}" exists in the system.`);
    } else {
      console.log(`No employee found with name "${name}".`);
    }
  }
}

const payroll = new PayrollSystem();

// Add Employees
payroll.addEmployee("Alice", 5000, 0.1);
payroll.addEmployee("Bob", 7000, 0.15);

// Calculate Salary
payroll.calculateSalary("Alice");

// Show Salary Slip
payroll.showSalarySlip("Alice");

// Search Employee
payroll.searchEmployee("Bob");


// 2.4. Library Management System

class Book {
  // private fields
  #title: string;
  #isIssued: boolean;

  constructor(title: string) {
    this.#title = title;   // store the title
    this.#isIssued = false; // book is not issued when added
  }

  getTitle(): string {
    return this.#title; // give book title when asked
  }

  isAvailable(): boolean {
    // true if book not issued
    return !this.#isIssued;
  }

  issue(): void {
    if (this.#isIssued) {
      console.log(`${this.#title} is already issued.`);
    } else {
      this.#isIssued = true;
      console.log(`${this.#title} issued successfully.`);
    }
  }

  returnBook(): void {
    if (!this.#isIssued) {
      console.log(`${this.#title} was not issued.`);
    } else {
      this.#isIssued = false;
      console.log(`${this.#title} returned successfully.`);
    }
  }
}

class Library {
  private books: Book[];

  constructor() {
    this.books = []; // array to store all book objects
  }

  addBook(title: string): void {
    const newBook = new Book(title); // create new book
    this.books.push(newBook); // add to library
    console.log(`Book "${title}" added to library.`);
  }

  issueBook(title: string): void {
    const found = this.books.find((book) => book.getTitle() === title);
    if (found) {
      found.issue();
    } else {
      console.log(`Book "${title}" not found.`);
    }
  }

  returnBook(title: string): void {
    const found = this.books.find((book) => book.getTitle() === title);
    if (found) {
      found.returnBook();
    } else {
      console.log(`Book "${title}" not found.`);
    }
  }

  showAvailableBooks(): void {
    console.log("Available Books:");
    for (const book of this.books) {
      if (book.isAvailable()) {
        console.log("• " + book.getTitle());
      }
    }
  }

  searchBook(title: string): void {
    const found = this.books.find((book) => book.getTitle() === title);
    if (found) {
      console.log(`"${title}" is present in the library.`);
    } else {
      console.log(`No book named "${title}" found.`);
    }
  }
}

const library = new Library();
library.addBook("The Great Gatsby");
library.addBook("1984");
library.issueBook("The Great Gatsby");
library.returnBook("The Great Gatsby");
library.showAvailableBooks();
library.searchBook("1984");


// 2.5. ATM Simulation

class ATM {
  private pin: number;
  private balance: number;
  private transactions: string[];

  constructor(pin: number, initialBalance: number = 0) {
    this.pin = pin;                   // store the user's pin
    this.balance = initialBalance;    
    this.transactions = [];           
  }

  // Check if entered pin matches stored pin
  authenticate(enteredPin: number): boolean {
    if (enteredPin === this.pin) {
      console.log("PIN verified successfully!");
      return true;
    } else {
      console.log("Invalid PIN!");
      return false;
    }
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Invalid amount!");
      return;
    }
    this.balance += amount;
    this.transactions.push(`Deposited Rs${amount}`);
    console.log(`Deposited Rs${amount} successfully.`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Invalid amount!");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }

    this.balance -= amount; 
    this.transactions.push(`Withdrawn Rs${amount}`);
    console.log(`Withdrawn Rs${amount} successfully.`);
  }


  checkBalance(): void {
    console.log(`Your current balance is Rs${this.balance}`);
  }

  // Show mini-statement
  printMiniStatement(): void {
    console.log("----- Mini Statement -----");
    if (this.transactions.length === 0) {
      console.log("No transactions yet.");
    } else {
      this.transactions.forEach((t, index) => {
        console.log(`${index + 1}. ${t}`);
      });
    }
  }
}


const atm = new ATM(1234, 1000);

// authenticating user
if (atm.authenticate(1234)) {
  atm.checkBalance();
  atm.deposit(500);
  atm.withdraw(200);
  atm.checkBalance();
  atm.printMiniStatement();
}
