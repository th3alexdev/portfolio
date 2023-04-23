import observeHome from "./observe/home" 

export const setLoader = (again) => { // Define the SetLoader function that will be called when the page loads for the first time.
                                      // It wiil also be called if necessary, for example, when the user sets the language.

                                      // The "again" parameter specifies to the function that it is being called a second time.

    document.body.style.overflow = "hidden" // First, block the scroll 

    /* Create a fragment that contains the loader */
    const fragment = document.createDocumentFragment() 
    const loaderHTML = document.createElement("div"); 
    loaderHTML.id = "loader";
    loaderHTML.className = "loader";
    loaderHTML.setAttribute("role", "status");
    loaderHTML.setAttribute('aria-label', "Loading...");

    // If the function is being called a second time, the animation it should do is assigned
    if(again) { loaderHTML.className += " fade-in-blurred-secondary" }

    loaderHTML.innerHTML = `<div class="loader-container"></div>`;

    fragment.appendChild(loaderHTML) // Add loader to fragment

    const loaderContainer = loaderHTML.querySelector('.loader-container') // Get container of the loader 
    
    /* Set SVG of the loader */
    loaderContainer.innerHTML = `<svg class="tea" width="37" height="48" viewbox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z" stroke="#ffd461" stroke-width="2"></path>
    <path d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34" stroke="#ffd461" stroke-width="2"></path>
    <path class="teabag" fill="#ffd461" fill-rule="evenodd" clip-rule="evenodd" d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"></path>
    <path class="steamL" d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#ffd461"></path>
    <path class="steamR" d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13" stroke="#ffd461" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span class="bar"></span>   `


    document.body.appendChild(fragment) // Add fragment to DOM

    const loader = document.getElementById('loader') // Get reference of the loader


    setTimeout(() => {
        // When the function is called a second time, the animation is removed after 4200ms
        if(again) loader.classList.remove('fade-in-blurred-secondary') 

        loader.classList.add('fade-out'); // Add animation to loader
        document.body.style.overflow = ""; // Allow scroll
        observeHome(); // Call the observeHome function when the loader has already disappeared from the viewport

        setTimeout(() => {
            loader.remove() // Remove the loader from the viewport

        }, 500);

    }, 3700);

}

setLoader()