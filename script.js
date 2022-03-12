// Scroll to Main when the scroll button in the header is clicked

// assign scroll button to a variable
const scrollButton = document.querySelector('.scrollButton');

// assign main to a variable
const mainElement = document.querySelector('main');

// function that is triggered when scroll button is clicked
scrollButton.addEventListener('click', function(click) {
    // Scroll to main
    mainElement.scrollIntoView();
})
