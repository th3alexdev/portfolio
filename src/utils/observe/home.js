import { observeIntersection } from '../intersectionObserver'; // Import Intersection observer function

const observeHome = () => { // Defines a function that will be used 
                            // when loader has finished

    const home = document.getElementById('home') // Get the reference of the section
    const elements = document.querySelectorAll('.home-animation') // Get elements that will 
                                                                  // have animations

    let options = { // Object which contains options for the
                    // Intersection Observer.
        rootMargin: "0px 0px 200px 0px"
    }

    const observeCallback = (entry) => {  // Defines a callback that will be call when Home is intersecting 

        elements.forEach(el => { // Loop through all the elements and adds a class of "show" and their animation specificied in dataset-animation
            let animation = el.dataset.animation

            el.classList.add('show')
            el.classList.add(animation)

        });
    }

    const observer = observeIntersection(observeCallback, options) // Create a new intersection observer function that was configured with
                                                                   // the callback and options
    observer.observe(home) // Observe home section
}

export default observeHome; 