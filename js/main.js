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
      navBar = document.querySelector('.nav-bar ');
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

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//Модальные окна
const commentsButton = document.querySelectorAll('.comments__button');
const commentText = document.querySelectorAll('.comments__comment-text');
const commentName = document.querySelectorAll('.comments__caption');
for(let i = 0; i < commentsButton.length; i++) {
    commentsButton[i].addEventListener('click', function() {
        
    const overlay = document.createElement('div');
      overlay.classList.add('overlay');

    const overlayContent = document.createElement('div');
      overlayContent.classList.add('overlay__content');

    const overlayClose = document.createElement('a');
      overlayClose.classList.add('overlay__close');

    const closeIcon = document.createElement('div');
      closeIcon.classList.add('close', 'icon');

    const name = document.createElement('h4');
      name.classList.add('overlay__name');

    const text = document.createElement('span');
      text.classList.add('overlay__text');

    text.textContent = commentText[i].textContent;
    name.textContent = commentName[i].textContent;

    overlay.appendChild(overlayContent);
    overlayContent.appendChild(overlayClose);
    overlayContent.appendChild(name);
    overlayContent.appendChild(text);
    overlayClose.appendChild(closeIcon);
    document.body.appendChild(overlay);

    setTimeout(function(){
        overlay.style.opacity = '1';
    }, 1)

    overlayClose.addEventListener('click', function() {
        overlay.style.opacity = '0';
        setTimeout(function(){
            document.body.removeChild(overlay);
        }, 290)
    })
    });
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//Скролл

$(".main-content").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                     // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical". 
 });


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $("#menu3").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $("#menu2").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
