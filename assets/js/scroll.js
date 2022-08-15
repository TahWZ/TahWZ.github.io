var srbottom = {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    interval: 100
};

var srfade = {
    opacity: 0,
    distance: '0px',
    duration: 1000,
    delay: 100
};

//Home
ScrollReveal().reveal('.home .profile-content', srfade);

//Resume
ScrollReveal().reveal('.resume .section', srbottom);

//Projects
ScrollReveal().reveal('.projects .item', srbottom);

//Contact
ScrollReveal().reveal('.contact .details', srbottom);
ScrollReveal().reveal('.contact .right-side', srfade);