'use strict'

const heading = document.querySelector('.h1')

heading.addEventListener('click', () => {
    console.log('clicked');
    heading.classList.toggle('is-active')
})