const menu = document.querySelector('.iconi_menu');
const nav = document.querySelector('nav');

/*Toggle para o menu em telas menores que 720px*/
menu.addEventListener('click', () => {
    if (nav.classList.contains('minimizar')) {
        nav.classList.remove('minimizar');
    } else {
        nav.classList.add('minimizar');
    }
});