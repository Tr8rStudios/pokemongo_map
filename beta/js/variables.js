$(document).ready(function(){
    /*
    Icons
    */

    var gymIcons = new ol.style.Style({
        image: new ol.style.Icon({
          src: 'icons/gym.png'
        })
    });

    var pokestopIcons = new ol.style.Style({
        image: new ol.style.Icon({
          src: 'icons/pokestop.png'
        })
    });
    var plain = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    /*
    Layers
    */
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
        style: pokestopIcons
    });

     var pokestopsLayermelbCBD = new ol.layer.Vector({
        title: 'Pokestops Layer (Melb-CBD)',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/pokestops/pokestops-melbcbd.json'
        }),
        style: pokestopIcons
    });
})