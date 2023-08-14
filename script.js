const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  //Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  //Create list item
  const li = document.createElement('li');
  li.className =
    'flex justify-between items-center p-2 border-black border font-bold';
  li.appendChild(document.createTextNode(newItem));
  const button = createButton();
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
};

//Create Button
const createButton = () => {
  const button = document.createElement('button');
  button.className = 'text-red-500';
  const icon = createIcon();
  button.appendChild(icon);
  return button;
};

//Create Icon
const createIcon = () => {
  const icon = document.createElement('i');
  icon.className = 'fas fa-times';
  return icon;
};

//Event Listeners
itemForm.addEventListener('submit', addItem);
