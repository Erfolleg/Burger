ymaps.ready(init);

let placemarks = [
    {
        latitude: 54.73574570,
        langitude: 55.95946280,
        hintContent: '<div class="map__hint">ул.50-летия Октября, 3</div>',
        balloonContent: ['<div class="map__balloon">',
            '<img class="map__balloon-img" src="img/content/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул.50-летия Октября, 3',
            '</div>'
        ]
    },
    {
        latitude: 54.73827147,
        langitude: 55.98110701,
        hintContent: '<div class="map__hint">ул.50-летия Октября, 21</div>',
        balloonContent: ['<div class="map__balloon">',
            '<img class="map__balloon-img" src="img/content/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул.50-летия Октября, 21',
            '</div>'
        ]
    },
    {
        latitude: 54.73220736,
        langitude: 55.95599350,
        hintContent: '<div class="map__hint">ул.Цюрупы, 85</div>',
        balloonContent: ['<div class="map__balloon">',
            '<img class="map__balloon-img" src="img/content/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул.Цюрупы, 85',
            '</div>'
        ]
    },
    {
        latitude: 54.73634140,
        langitude: 55.95294556,
        hintContent: '<div class="map__hint">ул.Ленина, 84</div>',
        balloonContent: ['<div class="map__balloon">',
            '<img class="map__balloon-img" src="img/content/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул.Ленина, 84',
            '</div>'
        ]
    },
],
    geoObjects = [];

function init() {
    let map = new ymaps.Map('map', {
        center: [54.73478865, 55.96364014],
        zoom: 15,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (let i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].langitude], {
            hintContent: placemarks[i].hintContent,
            balloonContent: placemarks[i].balloonContent.join('')
        },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/content/map/map-marker.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57]
            });
    }

    let clusterer = new ymaps.Clusterer({

    });
    map.geoObjects.add(clusterer);
    // map.geoObjects.add(placemark);
    clusterer.add(geoObjects);
}