const session1 = {
  team: 'Arsenal',
  goals: 20,
  assists: 17,
  yellowCards: 23,
  redCards: 12
}

const session2 = {
  team: 'Arsenal',
  goals: 20,
  assists: 17,
  yellowCards: 23,
  redCards: 12
}

const session3 = {
  team: 'Arsenal',
  goals: 20,
  assists: 17,
  yellowCards: 23,
  redCards: 12
}

const totals = {};

const scores = Object.keys(session1);

for(let i = 0; i < scores.length; i++) {
  let score = scores[i]
  console.log(score)
  if(isNaN(score[i])) {
  totals[score] = session1[score] + session2[score] + session3[score]
}
}
console.log(totals);