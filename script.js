const list = document.querySelector('ul');
const addButton = document.getElementById('addButton');
const input = document.querySelector('input');
addButton.addEventListener('click', showItemOnScreen);

function markDone(event) {
  const item = event.target; // checkbox HTML element
  item.parentNode.classList.toggle('done'); //uključujemo ili isključujemo toggle klasu na parent elementu (u ovom slučaju li)
}

function removeItem(event) {
  const button = event.target;
  button.parentNode.remove(); // sklanjamo roditeljski element
}

function addRemoveButton(item) {
  const removeButton = document.createElement('button');
  removeButton.className = 'removeButton';
  removeButton.innerText = 'Izbriši';
  removeButton.addEventListener('click', removeItem);
  item.appendChild(removeButton);
}

function addCheckBox(item) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('click', markDone);
  item.insertBefore(checkbox, item.firstChild);
}

function showItemOnScreen() {
  const item = document.createElement('li');
  item.innerText = input.value; //vrijednost koja se nalazi unutar input HTML elementa kojeg smo selektirali
  list.appendChild(item);
  addRemoveButton(item);
  addCheckBox(item);
}
