const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1) Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, scorer] of game.scored.entries())
  console.log(`Goal ${i}: ${scorer}`);

// 2)  Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let totalOdds = 0;
for (const odds of Object.values(game.odds)) {
  totalOdds += odds;
}
const average = totalOdds / Object.values(game.odds).length;
console.log(average);

/* 
3)  Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names
*/

function printOdds() {
  console.log(`Odd of victory ${game.team1}: ${game.odds["team1"]}`);
  console.log(`Odd of draw: ${game.odds["x"]}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds["team2"]}`);
}

printOdds();

function printOdds2() {
  for (const [key, value] of Object.entries(game.odds)) {
    console.log(
      `Odds of ${game[key] ? `victory ${game[key]}` : `draw`}: ${value}`
    );
  }
}

printOdds2();

const scorers = {};
for (const goalScorers of game.scored) {
  //   if (scorers[goalScorers]) {
  //     scorers[goalScorers]++;
  //   } else {
  //     scorers[goalScorers] = 1;
  //   }
  scorers[goalScorers] ? scorers[goalScorers]++ : (scorers[goalScorers] = 1);
}

console.log(scorers);
