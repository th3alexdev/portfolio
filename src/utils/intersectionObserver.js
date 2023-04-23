
// Export a function named observeIntersection   
// that takes in three arguments: observeCallback,
//                                options
//                                unobserveCallback (optional and has a default value of null)

export function observeIntersection(observeCallback, options, unobserveCallback = null) {

    const intersectedElements = new Set(); // New Set to store the elements that have been intersected

    const observer = new IntersectionObserver((entries) => { // new instance and pass in a callback function
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!intersectedElements.has(entry.target)) { // Check if the target element is not already 
                                                          // in the Set of intersected elements

                intersectedElements.add(entry.target);  // Add the target element to the Set of intersected elements
                observeCallback(entry); // Call the observeCallback function and pass in the entry as an argument
            }
            
        } else{

            if (intersectedElements.has(entry.target) && unobserveCallback) {
                unobserveCallback(entry);
            }

                intersectedElements.delete(entry.target);
        }
    })

    }, options)
    
    return observer;
}

export function unobserveIntersection(unobserveCallback, options) {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            unobserveCallback(entry)
        }
    })

    }, options)
    
    return observer;
}