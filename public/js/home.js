var learn = document.getElementById('learn');

function scrollHandler() {
	fadeOutOnScroll(learn);
}

window.addEventListener('scroll', scrollHandler);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function flashAgain() {
    var text = document.getElementById('under');
    text.style.color = (text.style.color=='white') ? 'transparent':'white';
}
var clrr = setInterval(flashAgain, 400);
