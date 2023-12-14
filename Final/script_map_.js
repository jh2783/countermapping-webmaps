var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

function myCallbackFunction() {}


map.on('load',function(){
    map.addSource('napopulation',{
        'type':'vector',
        'url': 'mapbox://jh2783.6ppybgue' 
    });

    map.addSource('broadbanduse',{
        'type':'vector',
        'url': 'mapbox://jh2783.1ve9gyga' 
    });

    map.addSource('vacrate',{
        'type':'vector',
        'url': 'mapbox://jh2783.a4u72zvh' 
    });

    map.addSource('povertyrate',{
        'type':'vector',
        'url': 'mapbox://jh2783.63gag0g7' 
    });

    map.addSource('reservcamp',{
        'type':'vector',
        'url': 'mapbox://jh2783.2uivjh5e' 
    });

    map.addSource('therapeutic',{
        'type':'vector',
        'url': 'mapbox://jh2783.3a45r4z3' 
    });

    map.addSource('nation',{
        'type':'vector',
        'url': 'mapbox://jh2783.ctoltwc6' 
    });


        map.addLayer({
    'id': 'therapeuticlayer',
    'type': 'circle',
    'source': 'therapeutic',
    'source-layer': 'COVID-19_Public_Therapeutic_L-332zz9',
    'paint': {
        'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            5, 1.5,
            10, 10
        ],
        'circle-color': '#ff7f00'
    }
});

        map.addLayer({
            'id': 'NA_poplayer',
            'type': 'fill',
            'source': 'napopulation',
            'source-layer': 'Native_American_population-bkodex',
            'paint': {
                'fill-color': [
                    'step',
                    ['to-number', ['get', 'NA/total p']],
                    ['rgba', 255, 255, 255, 0.6],
                    0.02, '#FFEBEE',
                    0.05, '#FFCDD2',
                    0.1, '#EF9A9A',
                    0.2, '#E57373',
                    0.35, '#EF5350',
                    0.50, '#D32F2F',
                    1, '#B71C1C'
                ],
                'fill-opacity': 0.4
            }
        });

        map.addLayer({
                'id':'broadbandlayer',
                'type':'fill',
                'source':'broadbanduse',
                'source-layer':'High_Speed_Broadband_Usage-d3yj24',
                'paint':{
                    'fill-color': ['step',
                                    ['to-number', ['get', 'int p_']],
                                    ['rgba', 255,255,204, 0.9],
                                    0.2, '#c2e699',
                                    0.4, '#78c679', 
                                    0.6, '#31a354',
                                    0.8, '#006837',
                                    1, '#000000', 
                                ],
                    'fill-opacity': 0.4,
                }
        });

        map.addLayer({
                'id':'povertylayer',
                'type':'fill',
                'source':'povertyrate',
                'source-layer':'Poverty_Rate-99nn64',
                'paint':{
                    'fill-color': ['step',
                                    ['to-number', ['get', 'pov_']],
                                    '#f1f2f8',
                                    11.5, '#a6bddb', 
                                    20, '#67a9cf',
                                    35, '#1c9099',
                                    50, '#016c59',
                                    100, '#000000', 
                                ],
                    'fill-opacity': 0.4,
                }
        });

        map.addLayer({
                'id':'vaclayer',
                'type':'fill',
                'source':'vacrate',
                'source-layer':'Vaccination_Rate-5qrljy',
                'paint':{
                    'fill-color': ['step',
                                    ['to-number', ['get', 'vacp_']],
                                    'white',
                                    0, ['rgba', 250, 250, 250, 0.5],
                                    15, '#FAE5D3',
                                    30, '#F5CBA7', 
                                    40, '#EB984E',
                                    50, '#CA6F1E',
                                    100, '#A04000', 
                                ],
                    'fill-opacity': 0.4,
                }
        });


        map.addLayer({
            'id':'nationlayer',
            'type':'line',
            'source':'nation',
            'source-layer':'nation_-drnjv2',
            'paint':{
                'line-color': '#7E7E7E',
                'line-width': ['interpolate', ['linear'], ['zoom'],
                    1, 1.5,
                    16, 2
                    ],
            }
        });

    map.addLayer({
            'id':'camplayer',
            'type':'line',
            'source':'reservcamp',
            'source-layer':'2020_Reservation_Camp_Locatio-b2j2di',
            'paint':{
                'line-color': '#660000',
                'line-width': [
                    'interpolate', ['linear'], ['zoom'],
                    1, .1,
                    10, 3
                    ],
            }
        });

});