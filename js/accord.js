const comandItem = document.getElementsByClassName('comand__item'),
      numComandItem = comandItem.length,
      menuContent = document.getElementsByClassName('menu__content'),
      numMenuContent = menuContent.length,
      five = document.querySelector('#five');

      
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