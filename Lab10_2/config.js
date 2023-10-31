var config = {
    style: 'mapbox://styles/jh2783/clodhz60s001b01qkbqze8qbv',
    accessToken: 'pk.eyJ1IjoiamgyNzgzIiwiYSI6ImNsbjF0eTNlODAxeDQzNGwyMHlvZmRraDAifQ.SGj4IJiMd_rTm4oqEvJlTw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'COASTAL FLOODING IN NEW YORK CITY',
    subtitle: 'Assessing Risks to Vunerable Housing',
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna ac est maximus tristique eu ut enim. Ut ultrices porttitor dolor, ac aliquam felis interdum quis. Nam luctus urna sit amet nibh scelerisque tempus. Nulla feugiat egestas ornare.",
    byline: 'By Juyeon Han',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna ac est maximus tristique eu ut enim. Ut ultrices porttitor dolor, ac aliquam felis interdum quis. Nam luctus urna sit amet nibh scelerisque tempus. Nulla feugiat egestas ornare. Nunc sagittis mattis nulla sit amet lobortis. In arcu risus, rhoncus ac nulla vitae, hendrerit lacinia urna. Etiam facilisis eleifend egestas. Aenean pulvinar luctus libero sit amet sagittis. Aliquam dignissim neque eu dolor vehicula accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vel ante a lacus vehicula vulputate. Phasellus elementum convallis mauris, ut tempus lectus lobortis blandit. Quisque nibh nibh, convallis quis purus vitae, scelerisque suscipit neque. Nullam tincidunt mi eu tellus blandit, id sagittis erat placerat. In vestibulum urna nulla, ac tincidunt risus varius ac.',
    para2: 'Cras blandit lacinia orci, sed feugiat tortor commodo ultrices. Curabitur ut leo vitae massa congue vestibulum. Curabitur nec lorem erat. Proin in dolor id justo mattis congue sit amet vitae purus. Etiam aliquam eu sem quis tempus. Pellentesque interdum pulvinar felis. Suspendisse quam sem, vulputate sit amet malesuada ut, malesuada eleifend libero. Cras fringilla metus metus, et consequat leo fermentum quis. Integer dapibus placerat tellus a ultricies. Donec dictum semper leo, facilisis semper nisi varius ut. Vivamus non pretium odio. Etiam condimentum, enim at auctor tempor, dolor nisi placerat justo, in imperdiet dui metus vitae dolor. Quisque semper bibendum mauris eu tempus. Vivamus a commodo ex.',
    footer: 'Source: "Impact of Hurricane Sandy." https://www.nyc.gov/site/cdbgdr/hurricane-sandy/hurricane-sandy.page. <br>Washburn, Alexandros. "Resilience in Red Hook." October 2013. https://placesjournal.org/article/resilience-in-red-hook/</br> U.S. Coast Guard, https://www.theatlantic.com/photo/2012/11/hurricane-sandy-the-aftermath/100397/</br>',
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


    {
    id: 'interlude',
    alignment: 'center',
    hidden: false,

    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-74.00549, 40.67497],
                zoom: 16,
                pitch: 48.61,
                bearing: 63.65,
    },
},


        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.93981, 40.79466],
              zoom: 15.95,
              pitch: 57.02,
              bearing: -19.94,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []


        }
    ]
};