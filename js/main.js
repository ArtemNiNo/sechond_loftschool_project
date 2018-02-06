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


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// Cлайдер
const arrowLeft = document.querySelector('.arrow__left'),
      arrowRight = document.querySelector('.arrow__right'),
      slider = document.querySelectorAll('.slider__content');

arrowRight.addEventListener('click', function() {
    for (let i = 0; i < slider.length; i++) {
        let currentPosition = parseInt(getComputedStyle(slider[i]).left);
        if (currentPosition > -1700) {
            slider[i].style.left = currentPosition - 875 + 'px';
            console.log(currentPosition);
        }
        if (currentPosition == -1700) {
            slider[i].style.left = -1700 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition > -607) {
            slider[i].style.left = currentPosition - 420 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition == -750) {
            slider[i].style.left = -750 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition > -607) {
            slider[i].style.left = currentPosition - 650 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition == -1138) {
            slider[i].style.left = -1138 + 'px';
        }
    }
});
arrowLeft.addEventListener('click', function() {
    for (let i = 0; i < slider.length; i++) {
        let currentPosition = parseInt(getComputedStyle(slider[i]).left);
        if (currentPosition < 1700) {
            slider[i].style.left = currentPosition + 875 + 'px';
            console.log(currentPosition);
        }
        if (currentPosition == 50) {
            slider[i].style.left = 50 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition < 90) {
            slider[i].style.left = currentPosition + 420 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition == 90) {
            slider[i].style.left = 90 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition < 33) {
            slider[i].style.left = currentPosition + 650 + 'px';
        }
        else if (parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition == 162) {
            slider[i].style.left = 162 + 'px';
        }
    }
});