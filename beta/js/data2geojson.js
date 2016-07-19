$.ajax({
    url: 'data/test.csv',
    success: function csvLoad(csv) {
        csv2geojson.csv2geojson(csv, function(err, data) {
            markerLayer.setGeoJSON(data);
            markerLayer.eachLayer(function(layer) {
                // here you call `bindPopup` with a string of HTML you create - the feature
                // properties declared above are available under `layer.feature.properties`
                var content = '<h1>size: ' + layer.feature.properties.size + '<\/h1>' +
                    '<h2>population: ' + layer.feature.properties.population + '<\/h2>';
                layer.bindPopup(content);
            });
        });
    }
});