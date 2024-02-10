const nav = document.querySelectorAll('.nav')

nav.forEach((item, index) => {
    console.log(item, index)
    item.addEventListener('click', () => {
        gsap.to(window, {
            duration: .8,
            scrollTo: {
                y: #section + (index + 1),
                offsetY: 0
            }
        });
    })
})