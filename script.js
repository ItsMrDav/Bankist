'use strict';

// *****************************************************************
// ************* DATA **********************************************
// *****************************************************************
const account1 = {
  owner: 'Davut Simsek',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// *****************************************************************
// ************* ELEMETS *******************************************
// *****************************************************************
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// *****************************************************************
// ************* GENERAL *******************************************
// *****************************************************************

// DISPLAYING MOVEMENTS===========================================
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// DISPLAYING BALANCE===========================================
const calcDisplayPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayPrintBalance(account1.movements);

// CREATING USER NAMES===========================================
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

// *****************************************************************
// ************* EXERCISES *****************************************
// *****************************************************************
/*
// ***** CODING CHALLANGE #1 *********************************************
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = (arr1, arr2) => {
  const correctedArr1 = arr1.slice(1, -2);
  const allDogs = correctedArr1.concat(arr2);
  allDogs.forEach((age, i, arr) => {
    age >= 3
    ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
    : console.log(`Dog number ${i + 1} is still a puppy is ${age} years old`);
  });
};

checkDogs(dogsJulia1, dogsKate1);
console.log(`-------DATA SET 2--------`);
checkDogs([9, 16, 6, 8, 3], dogsKate2);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(mov => Math.trunc(mov * eurToUsd));

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(Math.trunc(mov * eurToUsd));
}
console.log(movementsUsdFor);

const movementDescriptions = movements.map(
  (mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
    )}`
    );
    console.log(movementDescriptions);
    


// FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


// REDUCE METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 100);
console.log(balance);

let balance2 = 100;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
console.log(Math.max(...movements));


// CODING CHALLANGE #2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return humanAges.toFixed(1);
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
*/
