// Get hamburger button, close button, navbar and main section of the HTML
const hamburgerEl = document.getElementById('hamburger');
const closeEl = document.getElementById('close');
const navEl = document.getElementById('navbar');
const mainEl = document.getElementById('main-doc');

// Add stilling when opening and closing the hamburger menu    
hamburgerEl.addEventListener('click', () => {
        navEl.style.visibility = 'visible';
        mainEl.style.marginLeft = '200px !important';
        closeEl.style.visibility = 'visible';
});

closeEl.addEventListener('click', () => {
        navEl.style.visibility = 'hidden';
        mainEl.style.marginLeft = '15px';

    });

    // Fix issue of menu missing if window is resized after the closeEl was used
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navEl.style.visibility = 'visible';
        }
        else {
            navEl.style.visibility = 'hidden';
        }
        
    });

