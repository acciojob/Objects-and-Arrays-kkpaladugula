let players = ['John', 'Bob', 'Sarah'];
let person = {
  name: 'Alex',
  age: 25,
  occupation: 'Programmer'
};

// Create a reference to the players array
let team = players;

// Create a copy of the players array
let team1 = players.slice();

// Create a copy of the person object
let cap1 = Object.assign({}, person);
