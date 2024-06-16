const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputElInput);

function onInputElInput(event) {
  const username = inputEl.value.trim();
  outputEl.textContent = username;

  if (!username) {
    outputEl.textContent = 'Anonymous';
  }
}
