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
    return items.join(" ");
}

function renderShoppingList(){
    // rendering shopping list to dom
    console.log('`renderShoppingList` ran');
    const shoppingListItemString = generateShoppingItemString(STORE);
    //insert that html into the DOM
    $('.js-shopping-list').html(shoppingListItemString);
}

function addItemToShoppingList(itemName){
    //this function update items into the store
    console.log(`Adding"${itemName}" to shopping list`);
    //push new obj into store
    STORE.push({name: itemName, checked: false});
}

function handleNewItemSubmit(){
    //responsible when users add new item to list
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const newItemName = $('.js-shopping-list-entry').val();
        console.log(newItemName);
        $('.js-shopping-list-entry').val(''); 
        addItemToShoppingList(newItemName);
        //making sure to add the new item into the addItemToShoppingList function
        renderShoppingList();    
        //call function to rerender the list with the new items
    });
}

function toggleCheckedForListItem(itemIndex) {
    console.log("Toggling checked property for item at index " + itemIndex);
    STORE[itemIndex].checked = !STORE[itemIndex].checked;
}


function getItemIndexFromElement(item) {
    const itemIndexString = $(item)
        .closest('.js-item-index-element')
        .attr('data-item-index');
    return parseInt(itemIndexString, 10);
}

function handleItemCheckClicked(){
    //responsible for when user clicks 'check' button
    //on shopping list item
    $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
        console.log('`handleItemCheckClicked` ran');
        const itemIndex = getItemIndexFromElement(event.currentTarget);
        toggleCheckedForListItem(itemIndex);
        renderShoppingList();
    });

}
function deleteListItem(itemIndex) {
         console.log(`Deleting item at index  ${itemIndex} from shopping list`)
    //`.splice` is repsponsible to remove item, with a length
    // of 1. however it has the side effect that removing the desired item, and shifting all of the
    // elements to the right of `itemIndex` over one place to the left, so we
    // don't have an empty space in our list.
        STORE.splice(itemIndex, 1);
}

function handleDeleteItemClicked(){
    //responsible when user clicks 'delete' button
    //on shopping list
    $('.js-shopping-list').on('click', '.js-item-delete', event => {
        // get the index of the item in STORE
        const itemIndex = getItemIndexFromElement(event.currentTarget);
        // delete the item
        deleteListItem(itemIndex);
        // render the updated shopping list
        renderShoppingList();
    });
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