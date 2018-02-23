'use strict'

const STORE = [
    {name: 'apples', clicked: false},
    {name: 'oranges', clicked: false},
    {name: 'milk', clicked: true},
    {name: 'bread', clicked: false},
];
//responsible for storing underlying data 
//an array of objects 
//with a checked property that indicates if it has a line through it
function generateItemElement(item, itemIndex, template){
    return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
    <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}


function generateShoppingItemString(shoppingList){
    console.log("Generating shopping list element");
    const items = shoppingList.map((item, index) => generateItemElement(item, index));
    return item.join("");
}

function renderShoppingList(){
    // rendering shopping list to dom
    console.log('`renderShoppingList` ran');
    const shoppingListItemString = generateShoppingItemString(STORE);
    //insert that html into the DOM
    $('.js-shopping-list').html(shoppingListItemString);
}
function handleNewItemSubmit(){
    //responsible when users add new item to list
    console.log('`handleNewItemsSubmit` ran');
}
function handleItemCheckClicked(){
    //responsible for when user clicks 'check' button
    //on shopping list item
    console.log('`handleItemCheckClicked` ran');
}
function handleDeleteItemClicked(){
    //responsible when user clicks 'delete' button
    //on shopping list
    console.log('`handleDeleteItemClicked` ran');
}

function handleShoppingList(){
    //responsible for callback on functions
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
    //that render shopping list, new item submit, it
}
// when page loads it calls on all the functions
$(handleShoppingList);