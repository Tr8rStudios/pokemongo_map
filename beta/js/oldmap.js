var plain = new ol.layer.Tile({
        source: new ol.source.OSM()
});
var layer1=new ol.layer.Vector({
          source: new ol.source.Vector({
          url: 'data/test.geojson',
          format: new ol.format.GeoJSON({
          defaultDataProjection :'EPSG:4326', 
          projection: 'EPSG:3857'
            })
        }),
        name: 'NAME 1',
        style: style_1()
});

var map = new ol.Map({
    target: 'map',
    layers: [plain,layer1],
    view: new ol.View({
    center: ol.proj.fromLonLat([35,24]),
    zoom: 2
    })
});



var displayFeatureInfo = function(pixel) {
var features = [];
map.forEachFeatureAtPixel(pixel, function(feature, layer) {
    features.push(feature);
});
if (features.length > 0) {
    var info = [];
    var i, ii;
    for (i = 0, ii = features.length; i < ii; ++i) {
    info.push(features[i].get('name'));
    }
    document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
    map.getTarget().style.cursor = 'pointer';
} else {
    document.getElementById('info').innerHTML = '&nbsp;';
    map.getTarget().style.cursor = '';
}
};

map.on('pointermove', function(evt) {
if (evt.dragging) {
    return;
}
var pixel = map.getEventPixel(evt.originalEvent);
displayFeatureInfo(pixel);
});

map.on('click', function(evt) {
displayFeatureInfo(evt.pixel);
});