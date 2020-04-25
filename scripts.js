const app = document.getElementById('root');

const header = document.createElement('h1');
const form = document.createElement('form');
const textbox = document.createElement('textarea');
const enterButton = document.createElement('button');
const tokenList = document.createElement('div');

header.textContent = "MTG Tokens";
textbox.setAttribute('id', 'entry');
enterButton.innerHTML = "Enter";

app.appendChild(header);
app.appendChild(textbox);
app.appendChild(enterButton);
app.appendChild(tokenList);
