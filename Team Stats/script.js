const team = {
    _players:  [ 
      {firstName: 'Pablo', lastName: 'Sanchez', age: 11}, 
      {firstName: 'Lucas', lastName: 'Garcia', age: 12}, 
      {firstName: 'Gabriel', lastName: 'Marquez', age: 10}
      ],
    _games: [
      {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Burritos', teamPoints: 46, opponentPoints: 21},
      {opponent: 'Taquitos', teamPoints: 38, opponentPoints: 34}
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  
  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  },
  
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 77);
  
  team.addGame('Wolfs', 26, 23);
  team.addGame('Lions', 43, 36);
  team.addGame('Spaceships', 32, 42);
  
  console.log(team.players);
  console.log(team.games);