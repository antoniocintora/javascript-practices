// Permite al usuario poner su propio nombre opcionalmente
let userName = '';
// En caso de que el usuario escoja nombre, se ejecutara el primer comando, de lo contrario, se ejecutara el segundo
(userName) ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// Variable en la que se indica la pregunta que el usuario realiza
const userQuestion = 'Will I become millionaire?';
// Evalua si tenemos nombre de usuario o no para logear en consola la pregunta
(userName) ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`The user asked: ${userQuestion}`);
//Generamos un numero aleatorio del 0 al 7 para dar una respuesta a la pregunta
let randomNumber = Math.floor(Math.random() * 8 );
// Ahora que tenemos un numero aleatorio generado cada vez, lo almacenaremos en una variable llamada eightball
let eightBall = '';
// A continuacion creamos una condicion de switch para el randomnumber y el eightball
switch (randomNumber) {
case 0:
    eightBall = 'It is certain';
    break;
case 1:
    eightBall = 'It is decidedly so';
    break;
case 2:
    eightBall = 'Reply hazy try again';
    break;
case 3:
    eightBall = 'Cannot predict now';
    break;
case 4:
    eightBall = 'Do not count on it';
    break;
case 5:
    eightBall = 'My sources say no';
    break;
case 6:
    eightBall = 'Outlook not so good';
    break;
case 7:
    eightBall = 'Signs point to yes';
    break;
}

(userName) ? console.log(`${userName}, the magic eightball says: ${eightBall}`) : console.log(`The magic eightball says: ${eightBall}`);