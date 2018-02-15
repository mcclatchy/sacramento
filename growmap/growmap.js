function myFunction() {
  var map = L.map('map').setView([38.64, -121.77], 10);
  if (map.tap) map.tap.disable();
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	maxZoom: 17
}).addTo(map);
  map._layersMinZoom=9;


    // code box to limit map area to Sacramento REGION

        var southWest = L.latLng(32, -124.8),
             northEast = L.latLng(42.3, -113.8);

        var bounds = L.latLngBounds(southWest, northEast);

        map.setMaxBounds(bounds);
            map.on('drag', function() {
                map.panInsideBounds(bounds, { animate: false });
        });


// add var "code"
var code = '1tSTtMxULHuuleGIC_dNBHLpRRs7xvh90dyAAsX4leQ8'

// loop through spreadsheet with Tabletop
    Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      
      for (var i in sheet){
        var data = sheet[i];

          var icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [34, 40], // size of the icon
              iconAnchor:   [18, 40], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -40]
          });
          // if (data.iconori === "left") {
          //   icon = L.icon({
          //     iconUrl: data.icon,
          //     iconSize:     [60, 52], 
          //     iconAnchor:   [60, 26], 
          //     popupAnchor: [-35, -26]
          //     });
          // };
          // if (data.iconori === "right") {
          //   icon = L.icon({
          //     iconUrl: data.icon,
          //     iconSize:     [60, 52], 
          //     iconAnchor:   [0, 26], 
          //     popupAnchor: [35, -26]
          //     })
          //   };

          L.marker([data.lat, data.lng], {icon: icon})
          .addTo(map)
          .bindPopup("<strong style='color: #00A76D'>" + data.business + "</strong><br><b>Size:</b> " + 
                      data.size + "<br><b>Status: </b>" + data.status + "<br><b>Permitting agency:</b> " + data.localagency);
      }
    },
    simpleSheet: true 
  })
  
}