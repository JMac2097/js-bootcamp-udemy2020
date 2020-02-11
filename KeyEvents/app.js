const input = document.querySelector('#username');

input.addEventListener('keydown', function(event) {
    console.log(event);
});





const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        if (!this.value) return;
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
});