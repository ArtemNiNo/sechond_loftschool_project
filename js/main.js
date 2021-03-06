////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Акордеоны

const teamItems = document.querySelectorAll('.comand__item');
const burgersItems = document.querySelectorAll('.menu__content');

function ac (menuList, activeClassList) {
  menuList.forEach((item) => {
    item.addEventListener('click', (e) =>{
      e.preventDefault();
      menuList.forEach((item) => {
         if (e.currentTarget != item) {
          item.classList.remove(activeClassList);
         }
        });
      item.classList.toggle(activeClassList);
      });  
  });
}

ac(teamItems, 'comand__item--active');
ac(burgersItems, 'menu__content--active');
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
            slider[i].style.left = currentPosition - slide + -100 + 'px';
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
            slider[i].style.left = currentPosition + slide + 100 + 'px';
            console.log(currentPosition);
        }
        else if (currentPosition <= 50 && parseInt(getComputedStyle(document.body).width) > 768) {
            slider[i].style.left = -slide*4 + -330 + "px";
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
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//Форма обратной связи

$('#form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            formOverlay = document.querySelector('.form-overlay'),
            formOverlayText = document.querySelector('.form-overlay__text')
            mesText = document.querySelector('.form-overlay__content'),
            status = msg.status;
            formOverlay.addEventListener('click', function() {
                    formOverlay.style.display = 'none';
            })
        if (status === 'OK') {
            formOverlay.style.display = 'flex';
            setTimeout(function(){
                formOverlay.style.opacity = '1';
                formOverlayText.textContent  = ''+ mes +'';
            }, 1)
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};