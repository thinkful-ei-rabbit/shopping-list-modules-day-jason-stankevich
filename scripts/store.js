import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function(id){
  return items.find(item => item.id === id);
};

const addItem = function(name){
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(error) {
    throw `Cannot add item: ${error.message}`;
  }
};

const findAndToggleChecked = function(id){
  const itemName = findById(id);
  itemName.checked = !itemName.checked;
};

/* Toggles the hideCheckedItems property */
const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdateName = function(id, newName){
  try {
    item.validateName(newName);
    const itemName = findById(id);
    itemName.name = newName;
  } catch(error) {
    throw `Cannot update name: ${error.message}`;
  }
};

const findAndDelete = function(id){
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
};


// This object contains the only exposed methods from this module:
export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};