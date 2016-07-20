$(document).ready(function() {
    var gymIcons = new ol.style.Style({
        image: new ol.style.Icon({
          src: 'icons/gym.png'
        })
    });

    var plain = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var gymsLayer = new ol.layer.Vector({
        title: 'Gyms Layer',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/gyms.json'
        }),
        style: gymIcons
    });

    //original pokestop layer
    var pokestopsLayer = new ol.layer.Vector({
        title: 'Pokestops Layer',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/pokestops.json'
        }),
    });

     var pokestopsLayermelbCBD = new ol.layer.Vector({
        title: 'Pokestops Layer (Melb-CBD)',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/pokestops/pokestops-melbcbd.json'
        }),
    });

    var map = new ol.Map({
        target: 'map',
        layers: [plain,pokestopsLayer,pokestopsLayermelbCBD,gymsLayer],
        view: new ol.View({
        center: ol.proj.fromLonLat([-164,0]), //centers at middle of Pacific Ocean 
        zoom: 2.1
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

    var popup = new ol.Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false
    });

    map.addOverlay(popup);
    
    map.on('click', function(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature, layer) {
            return feature;
        });
        if (feature) {
            var geometry = feature.getGeometry();
            var coord = geometry.getCoordinates();
            popup.setPosition(coord);
            $(element).popover({
            'placement': 'top',
            'html': true,
            'content': feature.get('name')
            });
            $(element).popover('show');
        } else {
            $(element).popover('destroy');
        }
    });
});
