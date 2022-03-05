/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict';

function Calculator(num1, num2) {

  this.sum = function () {

    var sum = num1 + num2;
    console.log('Suma: ',sum);

  };

  this.subtract = function () {

    var subtract = num1 - num2;
    console.log('Skirtumas: ',subtract);

  };

  this.multiplicate = function () {
   var multiplicate = num1 * num2;

    console.log('Daugyba: ',multiplicate);
  };

  this.divide = function () {
    var divide = num1 / num2;
    console.log('Dalyba: ',divide);

  };

}

const myNumbers = new Calculator(50, 10);

myNumbers.sum();
myNumbers.subtract();
myNumbers.multiplicate();
myNumbers.divide();