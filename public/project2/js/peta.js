var longlat = [-7.358354, 112.609767];
const places = [
    { loc: [-7.359985, 112.626317], name: 'Warung' },
    { loc: [-7.358354, 112.609767], name: 'Nusendra.com' },
    { loc: [-7.347716, 112.621662], name: 'Masjid' },
    { loc: [-7.358354, 112.618767], name: 'Diskotik' }
];

var mymap = L.map('mapid').setView(longlat, 13);
for (var p of places) {
    var marker =
        L.marker(p.loc).addTo(mymap)
            .bindPopup(p.name);
}
// L.marker(longlat).addTo(mymap).bindPopup('Nusendra.com');
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibnVzZW5kcmEiLCJhIjoiY2ptNXBzZjJ3MGhzdjN2cnRlMnQzMXViMCJ9.e4QkJogqpJuL6rzcb-Ilew'
}).addTo(mymap);

mymap.on('click', onMapClick);

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lokasi yang dipilih: " + e.latlng.toString())
        .openOn(mymap);
}