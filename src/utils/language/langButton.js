import { setLoader } from "../loader"; // Import setLoader function
import { setLanguage } from "./setLanguage"; // Import setLanguage function

const switchLangButton = document.getElementById('switchLang') // Get the reference of switch language button

setTimeout(() => {
    switchLangButton.classList.add('settings-active') // After 4500 ms adds the animation to switch language button

}, 4500);


/* 
    Object that contains two properties
       isSetted -> Specifies if the language of the page has been set or not.
           lang -> If the language has been specified it is stored in this property.
*/
let data = { 
    isSetted: false,
    lang: ""
}


switchLangButton.addEventListener('click', (e) => { // Adding click event listener to 'switchLangButton'

    // Getting the value of setted to know if the button has already been pressed once or not.
    let pressed = switchLangButton.dataset.pressed
    

    if(pressed) { // If the button has already been pressed once
        e.preventDefault() 

    } else { // If the button has not been pressed yet

        // Saves the data-language value that contains the language opposite
        // the one the user is viewing
        let lang = e.target.dataset.language

        // Since the user has pressed the change language button, 
        // the available language is reversed
        // If language is 'es', set it to 'en'; if it is 'en', set it to 'es'
        if(lang === "es") lang = "en"
        else if(lang === "en") lang = "es"

        data.lang = lang
        e.target.dataset.language = lang

        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('lang', lang)

    
        setTimeout(() => { 
            setLoader(true); // After 1000 ms it calls the setLoader function and specifies that it is being called more than once
        
            setTimeout(() => {
                setLanguage(lang) // After 1000 ms it calls the setLanguage function and specifies the language desired by the user
            }, 800);
        }, 1000);

        // Set data-pressed to true so that it cannot be pressed again while requesting with the chosen language
        switchLangButton.dataset.pressed = true 

        // console.log(switchLangButton.dataset.pressed)

        
        data.isSetted = true // the isSetted property on the data object is set to true


        setTimeout(() => {
            switchLangButton.dataset.pressed = "" // remove the value inside data-pressed
        }, 1500);


        let setData = JSON.stringify(data) // Convert data object to string
        localStorage.setItem("language", setData); // Set the data object into localStorage

        // console.log(data)
    }


})


