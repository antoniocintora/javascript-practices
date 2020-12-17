const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!.';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'The computer wins this time!.';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      return 'Human wins this time!.';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'The computer wins this time!.';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return 'Human wins this time!.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'The computer wins this time!.';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      return 'Human wins this time!.';
    };
  };
  
  const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log(`The user threw: ${userChoice}!`);
  console.log(`The computer threw: ${computerChoice}!`)
  console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();