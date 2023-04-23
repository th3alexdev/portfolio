import { observeIntersection } from '../intersectionObserver'; // Import Intersection observer function

const about = document.getElementById('about') // Get the reference of the section
const title = document.getElementById('aboutTitle') // Get the title of the section

const aboutBg = document.getElementById('aboutBg') // Get the background of the section
const memoji = document.getElementById('memoji') // Get the image of the background 

let options = { // Object which contains options for the
                // Intersection Observer.

    rootMargin: "0px 0px -500px 0px"
}

const observeCallback = (entry) => { // Defines a callback that will be call when About is intersecting 

    title.parentElement.classList.add('text-reveal') // Add animation to the parent element of the title
    title.classList.add('text-reveal__title') // Add animation to title


    aboutBg.classList.add("fade-in-blurred") // Add fade-in-blurred animation
    memoji.classList.add('fade-in-blurred-memoji') // Add fade-in-blurred animation
    memoji.classList.remove('hidden') // Remove hidden class
}

const unobserveCallback = (entry) => { // Defines a callback that will be call when About is not intersecting 

    aboutBg.classList.add('fade-out-blurred') // Add fade-out-blurred animation
    memoji.classList.add('fade-out-blurred-memoji') // Add fade-out-blurred animation 

    memoji.classList.add('hidden') // Add hidden class
    aboutBg.classList.add('hidden') // Add hidden class

    setTimeout(() => { // Remove all animations of the background and image of the section

        memoji.classList.remove('fade-in-blurred-memoji') 
        memoji.classList.remove('fade-out-blurred-memoji') 

        aboutBg.classList.remove('fade-out-blurred') 
        aboutBg.classList.remove('fade-in-blurred') 


    }, 500);
}

        // Create a new intersection observer function that was configured with
        // the callback, options, and unobserveCallback 
const observer = observeIntersection(observeCallback, options, unobserveCallback) 

observer.observe(about) // Observe home section