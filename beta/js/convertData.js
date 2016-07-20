$.ajax({
    url: 'data/test.csv',
    success: function csvLoad(csv) {
        csv2geojson.csv2geojson(csv, function(err, data) {

            });
    }
});