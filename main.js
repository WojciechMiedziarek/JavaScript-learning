console.log("hello");

const firstName = "Wojtek";
const age = 32;
const cofee = "kawa";

console.log(
  `Cześć mam na imię ${firstName} a mój wiek to ${age} lata. Lubię pić ${cofee}. Uczę się programować, żeby mimo mojego wieku, który wynosi ${age} lata, móc zmienić zawód i powiedzieć sobie ${firstName} udało Ci się.`
);

function calculate(myNumber) {
    console.log(`dostałam ${myNumber}`);
return myNumber*7;
}
const myResult = calculate(12);

console.log(myResult);

function calculate(myNumber1) {
    console.log(`Otrzymałam ${myNumber1}`);
    return myNumber1+10;
}
const myResult1 = calculate(10);
console.log(myResult1);