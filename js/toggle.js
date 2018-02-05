////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Акордеоны
const comandItem = document.getElementsByClassName('comand__item'),
      numComandItem = comandItem.length,
      menuContent = document.getElementsByClassName('menu__content'),
      numMenuContent = menuContent.length;
 function ac (a, b, c) {
    for (var i = 0; i < b; i++) {
        a[i].addEventListener('click', function() {
            if(!(this.classList.contains(c))) {
                for(var i = 0; i < b; i++) {
                    a[i].classList.remove(c);
                }
            this.classList.add(c); 
            }
        })
    }
}
ac(menuContent, numMenuContent, 'menu__content--active');
ac(comandItem, numComandItem, 'comand__item--active');


///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Выпадашка на hero
const burger = document.querySelector('.header__burger-menu'),
      cross = document.querySelector('.cross'),
      hiddenMenu = document.querySelector('.hidden-menu ');
function toggleClass (button, changeableObject, classs, animation) {
    button.addEventListener('click', function() {
        changeableObject.classList.toggle(classs);
        changeableObject.style.transition = animation;
    });
}
toggleClass(burger, hiddenMenu, 'visible', 'all .3s');
toggleClass(cross, hiddenMenu, 'visible', 'all 0s');