import { observeIntersection } from '../intersectionObserver'; // Import Intersection observer function


const contact = document.getElementById('contact') // Get the reference of the section
const title = document.getElementById('contactTitle') // Get the title of the section

let options = { // Object which contains options for the
                // Intersection Observer.
    rootMargin: "0px 0px -500px 0px"
}

const observeCallback = (entry) => { // Defines a callback that will be call when Contact is intersecting 


    title.parentElement.classList.add('text-reveal') // Add animation to the parent element of the title
    title.classList.add('text-reveal__title') // Add animation to title

}

const observer = observeIntersection(observeCallback, options) // Create a new intersection observer function that was configured with
                                                               // the callback and options
observer.observe(contact)  // Observe home section