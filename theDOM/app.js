const body = document.querySelector('body');

body.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);
    console.log(getComputedStyle(e.target));
});