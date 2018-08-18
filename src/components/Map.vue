<template>
  <div class="columns">
    <div class="column">
<div id="map" style="width: 100%; height: 420px"></div>
</div>
<div class="column">
<table style="width:100%; height:190px;">
  <tr>
    <td>
    <h5>ПОЛОЖЕНИЕ ЯМЫ</h5>
    <button class="button"><small>Датчик 1</small></button>

    <button class="button1"><small>Датчик 2</small></button>

    <button class="button1"><small>Датчик 3</small></button>
    <button class="button1"><small>Датчик 4</small></button>
    <button class="button1"><small>Датчик 5</small></button>

  </td>
      <th rowspan="2" style="width:20%" align="right">
        <iframe src="https://www.youtube-nocookie.com/embed/i37uKnyen2o?autoplay=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="200" height="113" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
      </th>
    </tr>
    <tr>
      <td>
        <h5>ПОСЛЕДНЯЯ ФИКСАЦИЯ</h5>
        <h3 style="color:white">Маленькая яма в крайней левой полосе</h3>
        <span class="a" style="color:#6621ca" uk-icon="calendar"></span>
        <h6 class="a" style="color:gray">07.08.2018</h6>
        <h6 class="a" style="color:gray"> | </h6>
        <h6 class="a" style="color:gray"> 10:25:21</h6>
        <span class="b" style="color:#6621ca" uk-icon="location"></span>
        <h6 class="b" style="color:gray">43 13'44 </h6>
        <h6 class="b" style="color:gray"> 76 57'03 </h6>

      </td>
    </tr>
  </table>
</div>
</div>
</template>
<script>
export default {
  created() {
    ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчнию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [51.1471176, 71.44662361],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 12
            });
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            //myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('searchControl');
          //  myMap.events.add('click', function (e) {
              // Получение координат щелчка
            //  var coords = e.get('coords');
            //  alert(coords.join(', '));
            //});


            var myGeoObjects = [];

            myGeoObjects[0] = new ymaps.Placemark([51.15772356, 71.47335987],{
                                    clusterCaption: 'Яма 1',
                            //balloonContentBody: 'Текст в балуне',
                            balloonContentBody: 'Размер: 1rwwdzdfdfsdfsdfsd m^2, глубина: 15 cm'
                                    },{
                                    // Необходимо указать данный тип макета.
                                    iconLayout: 'default#image',
                                    iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                    // Размеры метки.
                                    iconImageSize: [20, 30],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её «ножки» (точки привязки).
                                    iconImageOffset: [-3, -42],
                                    });

            myGeoObjects[1] = new ymaps.Placemark([51.0887968, 71.4042503],{
                                    clusterCaption: 'Яма 2',
                                     // Хинт показывается при наведении мышкой на иконку метки.
                                    balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                    },{
                                    // Необходимо указать данный тип макета.
                                    iconLayout: 'default#image',
                                    iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                    // Размеры метки.
                                    iconImageSize: [20, 30],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её «ножки» (точки привязки).
                                    iconImageOffset: [-23, -42],

                    });

            myGeoObjects[2] = new ymaps.Placemark([51.15912315, 71.48391705],{
                                    clusterCaption: 'Яма 3',
                                    //balloonContentBody: 'Текст в балуне',
                                    balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                    },{
                                    // Необходимо указать данный тип макета.
                                    iconLayout: 'default#image',
                                    iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                    // Размеры метки.
                                    iconImageSize: [20, 30],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её «ножки» (точки привязки).
                                    iconImageOffset: [-16, -42],
                    });
            myGeoObjects[3] = new ymaps.Placemark([51.158129495987716, 71.55133704994137],{
                                    clusterCaption: 'Яма 3',
                                    //balloonContentBody: 'Текст в балуне',
                                    balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                    },{
                                    // Необходимо указать данный тип макета.
                                    iconLayout: 'default#image',
                                    iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                    // Размеры метки.
                                    iconImageSize: [20, 30],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её «ножки» (точки привязки).
                                    iconImageOffset: [-16, -42],
                    });
            myGeoObjects[4] = new ymaps.Placemark([51.13264697641801, 71.39649848792969],{
                                    clusterCaption: 'Яма 3',
                                    //balloonContentBody: 'Текст в балуне',
                                    balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                    },{
                                    // Необходимо указать данный тип макета.
                                    iconLayout: 'default#image',
                                    iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                    // Размеры метки.
                                    iconImageSize: [20, 30],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её «ножки» (точки привязки).
                                    iconImageOffset: [-16, -42],
                    });
            myGeoObjects[5] = new ymaps.Placemark([51.12724632183351, 71.48198585365235],{
                                    clusterCaption: 'Яма 3',
                                    //balloonContentBody: 'Текст в балуне',
                                    balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                    },{
                                    // Необходимо указать данный тип макета.
                                    iconLayout: 'default#image',
                                    iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                    // Размеры метки.
                                    iconImageSize: [20, 30],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её «ножки» (точки привязки).
                                    iconImageOffset: [-16, -42],
                    });



       var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
            // Устанавливаем стандартный макет балуна кластера "Карусель".
            clusterBalloonContentLayout: 'cluster#balloonCarousel',
            // Устанавливаем собственный макет.
               //clusterBalloonItemContentLayout: customItemContentLayout,
               // Устанавливаем режим открытия балуна.
            // В данном примере балун никогда не будет открываться в режиме панели.
            clusterBalloonPanelMaxMapArea: 0,
            // Устанавливаем размеры макета контента балуна (в пикселях).
            clusterBalloonContentLayoutWidth: 300,
            clusterBalloonContentLayoutHeight: 200,
            // Устанавливаем максимальное количество элементов в нижней панели на одной странице
            clusterBalloonPagerSize: 5
            // Настройка внешего вида нижней панели.
            // Режим marker рекомендуется использовать с небольшим количеством элементов.
            // clusterBalloonPagerType: 'marker',
            // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
            // clusterBalloonCycling: false,
            // Можно отключить отображение меню навигации.
            // clusterBalloonPagerVisible: false
        });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
    //myGeoObjects[1].events.add('click', function (e) {
            //  var coords = e.get('coords');
            //  alert(coords.join(', ')+ "Hello pit :)");
            //});
          }
  }
}
</script>
<style>
body {
  background: black;
  height: 700px;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .column {
        width: 100%;
    }
}
.a, .b{
  display: inline-block;
}
h6, h4, h5, h3 {
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0px;
}
h5 {
  color: #6621ca;
}
.button1 {
  background-color: transparent;
  color: white;
  display: inline-block;
  border-color: #6621ca;
}
.button1:active {
  background-color: #6621ca;
}
.button {
  background-color: #6621ca;
  color: white;
  display: inline-block;
  border-color: #6621ca;
}
table, th, td {
    border: 1px solid #6621ca;
    border-collapse: collapse;
}
th, td {
    padding: 0px;
    text-align: left;
}
</style>
