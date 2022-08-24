// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const team = [
  'Joe', 'Theo', 'Bea', 'Dyan', 'Afoo'
]

function alphabetizeTeams(team) {
  return [...team].sort()
}

console.log(alphabetizeTeams(team));

