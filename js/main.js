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
      slider = document.querySelectorAll('.slider__content'),
      slide = parseInt(getComputedStyle(document.querySelector('.slider__content')).width);

arrowRight.addEventListener('click', function() {
    for (let i = 0; i < slider.length; i++) {
        let currentPosition = parseInt(getComputedStyle(slider[i]).left);
        if (parseInt(getComputedStyle(document.body).width) <= 414 && currentPosition > -slide * 5) {
            slider[i].style.left = currentPosition - slide + -150 + 'px';
            console.log(currentPosition);
        }
        else if (parseInt(getComputedStyle(document.body).width) < 414 && parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition <= -824) {
            slider[i].style.left = 0 + 'px';
        }
        if (parseInt(getComputedStyle(document.body).width) >= 414 && parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition > -slide * 5) {
            slider[i].style.left = currentPosition - slide + -150 + 'px';
            console.log(currentPosition);
        }
        else if ( parseInt(getComputedStyle(document.body).width) >= 414 && parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition <= -824) {
            slider[i].style.left = 0 + 'px';
        }

        if (parseInt(getComputedStyle(document.body).width) > 480 && parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition > -slide * 5) {
            slider[i].style.left = currentPosition - slide + -185 + 'px';
            console.log(currentPosition);
        }
        else if (parseInt(getComputedStyle(document.body).width) > 480 && parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition <= -1142) {
            slider[i].style.left = 40 + 'px';
        }
        if (currentPosition > -slide * 4 && parseInt(getComputedStyle(document.body).width) > 768) {
            slider[i].style.left = currentPosition - slide + -60 + 'px';
            console.log(currentPosition);
        }
        else if (currentPosition <= 824 && parseInt(getComputedStyle(document.body).width) > 768) {
            slider[i].style.left = 50 + "px";
        }
    }
});
arrowLeft.addEventListener('click', function() {
    for (let i = 0; i < slider.length; i++) {
        let currentPosition = parseInt(getComputedStyle(slider[i]).left);
        if ( parseInt(getComputedStyle(document.body).width) <= 414 && currentPosition < -slide) {
            slider[i].style.left = currentPosition + slide + 150 + 'px';
            console.log(currentPosition);
        }
        else if (currentPosition <= 50 && parseInt(getComputedStyle(document.body).width) <= 414) {
            slider[i].style.left = -slide*5 + -350 + "px";
        }
        if (parseInt(getComputedStyle(document.body).width) > 414 && parseInt(getComputedStyle(document.body).width) <= 480 && currentPosition < -slide) {
            slider[i].style.left = currentPosition + slide + 150 + 'px';
            console.log(currentPosition);
        }
        else if (currentPosition <= 100 && parseInt(getComputedStyle(document.body).width) <= 480 && parseInt(getComputedStyle(document.body).width) > 414) {
            slider[i].style.left = -slide*5 + -320 + "px";
        }
        if (parseInt(getComputedStyle(document.body).width) > 480 && parseInt(getComputedStyle(document.body).width) <= 768 && currentPosition < -slide) {
            slider[i].style.left = currentPosition + slide + 185 + 'px';
            console.log(currentPosition);
        }
        else if (currentPosition <= 100 && parseInt(getComputedStyle(document.body).width) > 480 && parseInt(getComputedStyle(document.body).width) <= 768) {
            slider[i].style.left = -slide*5 + -280 + "px";
        }
        if (parseInt(getComputedStyle(document.body).width) > 768 && currentPosition < 50) {
            slider[i].style.left = currentPosition + slide + 60 + 'px';
            console.log(currentPosition);
        }
        else if (currentPosition <= 50 && parseInt(getComputedStyle(document.body).width) > 768) {
            slider[i].style.left = -slide*4 + -190 + "px";
        }
    }
});