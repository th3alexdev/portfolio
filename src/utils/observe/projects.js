import { observeIntersection } from '../intersectionObserver'; // Import Intersection observer function

const projects = document.getElementById('projects') // Get the reference of the section
const title = document.getElementById('projectsTitle') // Get the title of the section
const cards = document.querySelectorAll('.card') // Get cards of the section

let options = { // Object which contains options for the
                // Intersection Observer.
    rootMargin: "0px 0px -500px 0px"
}

const observeCallback = (entry) => { // Defines a callback that will be call when Projects is intersecting 

    title.parentElement.classList.add('text-reveal') // Add animation to the parent element of the title
    title.classList.add('text-reveal__title') // Add animation to title

    cards.forEach(el => { // Loop through all the elements and adds a class of "show" and their animation specificied in dataset-animation
        let animation = el.dataset.animation
        el.classList.add(animation)

        setTimeout(() => { // After 350 ms remove hidden class 
            el.classList.remove('hidden')

        }, 350);
    })
}

const observer = observeIntersection(observeCallback, options) // Create a new intersection observer function that was configured with
                                                               // the callback and options
observer.observe(projects) // Observe home section