// Header Buttons
let headerButtons = document.querySelectorAll('.headerButtonContainer');
for (let i = 0; i < headerButtons.length; i++) {
    let button = headerButtons[i];
    button.addEventListener('click', () => headerScroll(button));
};

// Header Logo as button
let headerLogo = document.querySelector('.headerLogo');
headerLogo.addEventListener('click', () => headerScroll(headerLogo));

function headerScroll(button) {
    let id = button.id;
    let targetId = id.replace('Button', 'Section');
    let target = document.querySelector(`#${targetId}`);
    console.log(target)
    target.scrollIntoView();
};