const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const ball = document.querySelectorAll('.ball');

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    //Get ball-color class
    const ballColor = document.querySelector('.ball-color')
    //remove ball-color class
    ballColor.classList.remove('ball-color')

    // next slide 
    if (current.nextElementSibling) {
        // Add current and current to next sibling
        current.nextElementSibling.classList.add('current');
        ballColor.nextElementSibling.classList.add('ball-color')
    } else {
        // Add current and ballColor to start
        slides[0].classList.add('current');
        ball[0].classList.add('ball-color')
    }
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    //Get ball-color class
    const ballColor = document.querySelector('.ball-color')
    //remove ball-color class
    ballColor.classList.remove('ball-color')

    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
        ballColor.previousElementSibling.classList.add('ball-color')
    } else {
        // Add current and ballColor to last
        slides[slides.length - 1].classList.add('current');
        ball[ball.length - 1].classList.add('ball-color')
    }
};
//const balls = () => {
ball.forEach(function (el, ind) {
    el.addEventListener('click', () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        slides[ind].classList.add('current')

        const ballColor = document.querySelector('.ball-color')
        ballColor.classList.remove('ball-color')
        ball[ind].classList.add('ball-color')
    })
})
//}

// Button events
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});