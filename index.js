const STORE = [
    {name: 'apples', clicked: false},
    {name: 'oranges', clicked: false},
    {name: 'milk', clicked: true},
    {name: 'bread', clicked: false},
];
//responsible for storing underlying data 
//an array of objects 
//with a checked property that indicates if it has a line through it


function renderShoppingList(){
    // rendering shopping list to dom
    console.log('`renderShoppingList` ran');
}
function handleNewItemSubmit(){
    //responsible when users add new item to list
    console.log('`handleNewItemeSubmit` ran');
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