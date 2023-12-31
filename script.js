// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hambuerger menu di klik
document.querySelector('#hamburger').onclick = () => {
    navbarNav.classList.toggle('active')
};

// Klik Di luar Side Bar untuk menghilangkan nav
const hambuerger = document.querySelector('#hamburger');
document.addEventListener('click', function(e) {
    if(!hambuerger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// menu

let priviewMenu = document.querySelector('.menu-priview');
let priviewBox = priviewMenu.querySelectorAll('.priview');

document.querySelectorAll('.menu-container .bagian').forEach(product => {
    product.onclick = () => {
        priviewMenu.getElementsByClassName.display = 'flex';
        let name = product.getAttribute('data-name');
        priviewBox.forEach(priview => { 
            let target = product.getAttribute('data-target');
            if (name == target) {
                priview.classList.add('.active')
            }
        })
    }
});

priviewBox.forEach(close => {
    close.querySelector('.ri-close-line').onclick = () => {
        close.classList.remove('.active');
        priviewMenu.style.display = 'none';
    };
});

