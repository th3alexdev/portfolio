
const burger = document.getElementById('btnToggle') // Get burger button
const nav = document.getElementById('headerNav') // Get nav header
const main = document.getElementById('main') // Get main element

burger.addEventListener('click', () => { // When burger button is pressed,
    main.classList.toggle('blurred')     // main adds or removes the blur effect
    nav.classList.toggle('header-nav--active') // nav adds active class state
})

nav.addEventListener('click', (e) => {

    if(e.target.tagName == "SPAN") { // Checked if the clicked element is a <span>

        e.preventDefault()   // Prevent the default action of the event

        main.classList.remove('blurred') // Remove the blur effect from the main element
        nav.classList.remove('header-nav--active') // Remove the active class state
        
        let id = e.target.parentElement.href // Get the href of the parent element of the clicked span

        setTimeout(() => { // Then set a timeout to uncheck the nav button and navigate to the href after 350ms
            burger.checked = false;
            location.href = id;

        }, 350);
    }
})