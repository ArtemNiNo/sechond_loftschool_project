ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [56.3142945, 43.990551900000014],
        zoom: 12
    });
    myPlacemark = new ymaps.Placemark([56.3142945, 43.990551900000014], { hintContent: 'Нижний Новгород!', balloonContent: 'Примерно где-то тут живет самый криворукий ученик loftschool' });
    myMap.geoObjects.add(myPlacemark);
}