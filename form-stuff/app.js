const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('cc', creditCardInput.value);
    console.log('terms', termsCheckbox.checked);
    console.log('veggieSelect', veggieSelect.value);

});

const formData = {};

// creditCardInput.addEventListener('input', (e) => {
//     console.log('cc changed: ', e);
//     formData.cc = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('veg changed: ', e);
//     formData.veggie = e.target.value;

// });

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('Checkbox', e);
//     formData.agreeToTerms = e.target.checked;
// });

for( let input of [creditCardInput, termsCheckbox, veggieSelect]) {

    input.addEventListener('input', ({ target }) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
}