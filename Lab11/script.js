const accessToken = 'pk.eyJ1IjoiamgyNzgzIiwiYSI6ImNsbjF0eTNlODAxeDQzNGwyMHlvZmRraDAifQ.SGj4IJiMd_rTm4oqEvJlTw'
mapboxgl.accessToken = accessToken;

const map = new mapboxgl.Map({
    container: 'JUYEON',
    style: 'mapbox://styles/jh2783/clojjvp9j005001pe2dduabt3',
    center: [-122.41508, 37.77443],
    zoom: 13,
    pitch: 35,
bearing: 0.00
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
    map.addSource('RestaurantSource', {
        'type': 'vector',
        'url': 'mapbox://jh2783.bnralbtr'
    });

    console.log('Initial Zoom Level:', map.getZoom());

    map.addLayer({
        'id': 'inspection_id',
        'type': 'circle',
        'source': 'RestaurantSource',
        'source-layer': 'Historical_Restaurant_Scores_-6ni5ko',
        'paint': {
            'circle-radius': [
                'interpolate', ['linear'], ['zoom'], 3, 2, 17, 4
                ],
            'circle-color': [
                'step', ['to-number', ['get', 'inspection_score']],
                'gray',
                45, '#440154',
                80, '#3b528b',
                85, '#21908d',
                90, '#5dc963',
                95, '#fde725'
            ],

            'circle-opacity': 0.55
        }
    });

    map.on('mouseenter', 'inspection_id', (e) => {
    var name = e.features[0].properties.business_name;
    var textField = document.getElementById('subtitle');
    textField.innerHTML = name;
});
    
});