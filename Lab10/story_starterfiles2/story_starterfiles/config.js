var config = {
    style: 'mapbox://styles/jh2783/clodhz60s001b01qkbqze8qbv',
    accessToken: 'pk.eyJ1IjoiamgyNzgzIiwiYSI6ImNsbjF0eTNlODAxeDQzNGwyMHlvZmRraDAifQ.SGj4IJiMd_rTm4oqEvJlTw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'PUBLIC AND AFFORDABLE HOUSING FLOOD RISK',
    subtitle: 'Assessing Risks to Vunerable Housing',
    byline: 'By Juyeon Han',
    footer: 'Source: "Impact of Hurricane Sandy." https://www.nyc.gov/site/cdbgdr/hurricane-sandy/hurricane-sandy.page. <p>Washburn, Alexandros. "Resilience in Red Hook." October 2013. https://placesjournal.org/article/resilience-in-red-hook/</p> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'HURRICANE SANDY',
            image: 'images/hurricane-sandy-destroys-breezy-point-queens.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. <P> With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this? </P>',
            location: {
                center: [-73.98764, 40.74336],
                zoom: 11.69,
                pitch: 20.61,
                bearing: 65.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 0,
                     duration: 0
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'THE RED HOOK HOUSES',
            image: 'images/washburn-red-hook-5_525.jpg',
            description: 'The Red Hook Houses consist of 16 residential buildings, under the management of the New York City Housing Authority (NYCHA). Before the hurricane, the area was already classified as flood zone 1, indicating high flood risk. When Hurricane Sandy struck, the development was inundated with 6 feet of flood water through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that hurt many residents',
            location: {
                center: [-74.00549, 40.67497],
                zoom: 16,
                pitch: 48.61,
                bearing: 63.65,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: .65, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

                    {
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 1,
                    duration: 5000
                    }

            ]
            ,
            onChapterExit: []
        },
        
    ]
};
