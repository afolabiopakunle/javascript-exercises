// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const team = [
//   'Joe', 'Theo', 'Bea', 'Dyan', 'Afoo'
// ]

// function alphabetizeTeams(team) {
//   return [...team].sort()
// }

// console.log(alphabetizeTeams(team));

const staff = [
  {
    name: 'Wesley',
    position: 'musician'
  },
  {
    name: 'Tinubu',
    position: 'pastor'
  },
  {
    name: 'Afolabi',
    position: 'developer'
  },
  ,
  {
    name: 'Michael',
    position: 'developer'
  },
]

function getMusicians(staff) {
  return staff.filter(staff => staff.position == 'developer')
  
}

console.log(getMusicians(staff))