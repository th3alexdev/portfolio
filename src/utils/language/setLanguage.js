import { langRequest } from "./langRequest" // Imports the function with the prompts for the language

export const setLanguage = async (lang) => { // Exports a function called 'setLanguage' that takes a 'lang'
                                             // parameter and returns a promise

    const textsToChange = document.querySelectorAll("[data-section]") // Selects all the elements with a data-section attribute
                                                                      // to change their textContext

    let toChange // Defines the opposite language to the
                 // one passed to the function by parameter

    if(lang == "es") {
        toChange = "es"
    
    } else {
        toChange = "en"
    }
    
    // Set the value of the 'data-language' attribute of the 'switchLangButton' element to 'toChange'
    switchLangButton.dataset.language = toChange

    
    let data = await langRequest(lang) // Calls langRequest function to get the JSON for the chosen
                                       // language and stores it in data
    
    for (const textToChange of textsToChange) { // Loop through all elements with a 'data-section' attribute 
                                                // and change their text content based on the 'data' object

        const section = textToChange.dataset.section
        const value = textToChange.dataset.value;
    
        textToChange.innerHTML = data[section][value]
    }    
}

const switchLangButton = document.getElementById('switchLang') // Get the reference of the switchLangButton
let userLanguage

let getData = localStorage.getItem("language"); // Check if there is language data stored in the browser's localStorage

if(getData) { // If there is language data stored, parse it and set the user's language to the stored language
    let data = JSON.parse(getData) 

    if(data.isSetted) {
        userLanguage = data.lang
    
    }

} else { // If there is no language data stored

    userLanguage = navigator.language // Get the language of the user browser
    userLanguage = userLanguage.substring(0,2)
}

// Call the 'setLanguage' function with the user's language as the parameter to set the text content of the page
setLanguage(userLanguage)
