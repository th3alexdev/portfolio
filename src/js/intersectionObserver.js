const titles = document.querySelectorAll('.title-box')
const cards = document.querySelectorAll('.card')

// const about = document.getElementById('about')

function callback(entries) {

    entries.forEach(entry => {

        if(entry.isIntersecting) {
            let parent = entry.target.firstElementChild


            parent.classList.add('text-reveal__title')
            entry.target.classList.add('text-reveal')

            setTimeout(() => {
                
                cards.forEach(el => {
                    el.classList.add('slide-down-blurred')
                    el.classList.remove('undercover')
                })

            }, 900);

        }
    });
}

let options = {
    rootMargin: "0px 0px -300px 0px"
    // threshold: 0.15
}

const observer = new IntersectionObserver(callback, options)

// observer.observe(about)
