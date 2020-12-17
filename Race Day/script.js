let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;

if ( age > 18 && registeredEarly === true ) {
    raceNumber +=1000;
}

if (age > 18 && registeredEarly === true ) {
    console.log(`Your race will start at 9.30 am, and your race number is ${raceNumber}`);
} else if (age > 18 && registeredEarly == false) {
    console.log(`Your race will start at 11.00 am and your race number is ${raceNumber}`);
} else if (age < 18 ) {
    console.log(`Your race will start at 12.30 pm, and yor race number is ${raceNumber}`);
} else {
    console.log('Go to check the registration desk');
}