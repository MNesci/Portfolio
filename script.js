// Scroll to Main when the Learn More button in the header is clicked

// assign button to a variable
const scrollButton = document.querySelector('.learnMoreButton');

// assign main to a variable
const mainElement = document.querySelector('main');

// function that is triggered when Leran More button is clicked
scrollButton.addEventListener('click', function(click) {
    // Scroll to main
    mainElement.scrollIntoView();  
});

// Scroll to Contact Section when the Get in Touch button in the header is clicked

// assign button to a variable
const contactButton = document.querySelector('.contactButton');

// assign Contact Section to a variable
const contactSection = document.querySelector('.contactSection');

// function that is triggered when Get in Touch button is clicked
contactButton.addEventListener('click', function(click) {
    // Scroll to Contact Section
    contactSection.scrollIntoView();
});