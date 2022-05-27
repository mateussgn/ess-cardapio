import addItem from './addItem.js';
import addItemToCategory from './addItemToCategory.js';
import createCategory from './createCategory.js';

(async function runTests() {
    try {
        addItem.addItem();
        createCategory.createCategory();
        addItemToCategory.addItemToCategory();
    } catch (error) {
      console.log(error)
    }
})();