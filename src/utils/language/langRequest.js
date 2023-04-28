
export const langRequest = async (lang) => { // Defines the function with the request for the language of the page,
                                             // receives the lang parameter with the language being searched for

    try {

        // Sending a GET request to a JSON file located in a specific directory based on the 'lang' parameter
        // const response = await fetch(`../data/locales/${lang}.json`)
        const response = await fetch(`/data/locales/${lang}.json`)
        
        // If the response is not OK, throw an error            
        if(!response.ok) {
            throw new Error("There was an error!", response.status)

        } else { // If the response is OK, parse the JSON data and return it
            const data = await response.json()
            return data 
        }

    } catch(e) {
        // If an error occurs, return the error
        return e
    }

}

