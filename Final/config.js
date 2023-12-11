var config = {
    style: 'mapbox://styles/jh2783/clq02ttl0012q01qmc2827h15',
    accessToken: 'pk.eyJ1IjoiamgyNzgzIiwiYSI6ImNsbjF0eTNlODAxeDQzNGwyMHlvZmRraDAifQ.SGj4IJiMd_rTm4oqEvJlTw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'FORGOTTEN FRONTLINES',
    subtitle: 'NATIVE AMERICANS CONFRONTING PANDEMIC AND RACIAL CHALLENGES',
    //subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna ac est maximus tristique eu ut enim. Ut ultrices porttitor dolor, ac aliquam felis interdum quis. Nam luctus urna sit amet nibh scelerisque tempus. Nulla feugiat egestas ornare.",
    byline: 'Cornell University | CRP 5850 | Juyeon Han',
    para1: 'The global tragedy of COVID-19 has been an ongoing concern since 2019, resulting in over a million deaths in the United States alone. Its repercussions have ranged from immediate consequences to chronic health issues, with the virus and its impact continuing to loom over our society, posing a continuous threat to public health. However, amidst this crisis, it has become evident that the virus’s effects and the access to a treatment have not been distributed equitably across the population. Racial minorities such as Black and Latin Americans were more vulnerably exposed to bear a heavy burden as their risk of hospitalization due to COVID-19 compared to the white population was 2.8 times higher while the mortality rate is each two times for Black and three times for Latin Americans higher than that of their white counterparts.  This phenomenon underscores not only the impact of the virus but also the prevailing inequities that racial minorities face in accessing basic urban hygiene and healthcare services in this country on a daily basis.',
    para2: 'Especially, this endeavor aims to highlight the often-overlooked challenges faced by Native Americans during this crisis. Despite their heightened vulnerability to severe outcomes, their data remains underreported or inaccurately categorized as "other" in surveys. The focus of the project is to visualize and compare the experiences of Native Americans within broader societal demographics, highlighting the possible factors impacting disparities in healthcare access experienced by racial minorities. While COVID-19 itself is not racist, the systemic inequities exacerbating the struggles faced by Native Americans during this global health crisis distinctly reflect racial biases.',
    footer: '<br>Sources</br><br>1. @@@@@</br>br>1. @@@@@</br>br>2. @@@@@</br>br>3. @@@@@</br>br>4. @@@@@</br>br>5. @@@@@</br>br>6. @@@@@</br>br>7. @@@@@</br>br>8. @@@@@</br>br>9. @@@@@</br>br>10. @@@@@</br>br>11. @@@@@</br>br>12. @@@@@</br>br>13. @@@@@</br>br>14. @@@@@</br>br>15. @@@@@</br><br></br><br></br>',

    chapters: [

        {
            id: 'chapter 2',
            alignment: 'center',
            hidden: false,
            title: 'THE 1700s: DEEP-ROOTED HEALTH ISSUES',
            image: '',
            //'images/hurricane-sandy-destroys-breezy-point-queens.jpg',
            description: 'description',
            location: {
                center: [-97.49355, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "visible";
                document.getElementById("legend5").style.visibility = "hidden";
            },

            onChapterEnter: [

                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
            ],

            onChapterExit: [
                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},         
            ],
        },

        {
            id: 'chapter 3',
            alignment: 'center',
            hidden: false,
            title: 'The 2000s: CONTINUOUS PROBLEMS',
            image: ' ',
            description: 'description',
            location: {
                center: [-97.49355, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "visible";
                document.getElementById("legend5").style.visibility = "hidden";
            },
            onChapterEnter: [

                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
            ],

            onChapterExit: [
                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},         
            ],
        },



        {
            id: 'chapter 4',
            alignment: 'center',
            hidden: false,
            title: '2019-2023: COVID-19 PANDEMIC',
            image: ' ',
            description: 'description',
            location: {
                center: [-97.49355, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "visible";
                document.getElementById("legend5").style.visibility = "hidden";
            },
            onChapterEnter: [

                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
            ],

            onChapterExit: [
                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 1},
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},         
            ],
        },

   //{
   // id: 'interlude',
    //alignment: 'center',
   // hidden: false,

    //description: '<br>WHAT MIGHT CUASED IT? </br> <br>description description</br> 1. ECONOMIC FACTOR: poverty 2. SOCIAL FACTOR: low internet access 3. PHYSICAL FACTOR: long travel distance to healthcare services',
   
   // location: {
               // center: [-97.49355, 39.92230],
               // zoom: 3.5,
               // pitch: 0,
               // bearing: 0
            //},
//},

{
            id: 'chapter 5',
            alignment: 'left',
            hidden: false,
            title: '<br>WHAT MIGHT CUASED IT? </br> <br>description description</br> 1. ECONOMIC FACTOR: poverty 2. SOCIAL FACTOR: low internet access 3. PHYSICAL FACTOR: long travel distance to healthcare services',
            image: ' ',
            description: 'description',
            location: {
                center: [-117.88655, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "visible";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 1},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 1},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },


        {
            id: 'chapter 6',
            alignment: 'left',
            hidden: false,
            title: '1. ECONOMIC FACTOR: poverty',
            image: ' ',
            description: 'description',
            location: {
                center: [-117.88655, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "visible";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },

             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 1},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 1},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },

{
            id: 'chapter 7',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: navajo nation',
            image: ' ',
            description: 'description',
            location: {
                center: [-111.03767, 36.38827],
zoom: 7.1,
pitch: 40.94,
bearing: 25.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "visible";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0.5},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 1},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },

    {
            id: 'chapter 8',
            alignment: 'left',
            hidden: false,
            title: '2. SOCIAL FACTOR: low internet access',
            image: ' ',
            description: 'description',
            location: {
                center: [-117.88655, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "visible";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 1},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 1},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },

    {
            id: 'chapter 9',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: blackfeet indian reservation',
            image: ' ',
            description: 'description',
            location: {
                center: [-113.35653, 48.65846],
zoom: 8.54,
pitch: 31.43,
bearing: 15.45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "visible";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: .5},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 1},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },
{
            id: 'chapter 10',
            alignment: 'left',
            hidden: false,
            title: '3. PHYSICAL FACTOR: long travel distance to healthcare services',
            image: ' ',
            description: 'description',
            location: {
                center: [-117.88655, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "visible";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 1},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 1},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },

{
            id: 'chapter 11',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: cheyenne river reservation',
            image: ' ',
            description: '<br>HISTORIC DISTRUST</br> description',
            location: {
                center: [-101.69169, 45.15287],
zoom: 8.41,
pitch: 37.34,
bearing: 26.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "visible";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 1},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 1},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},         
            ],
        },

{
            id: 'chapter 12',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: standing rock reservation',
            image: "",
            description: '<br>LACK OF INFRASTRUCTURE</br> description',
            location: {
                center: [-101.16339, 45.53419],
zoom: 8.42,
pitch: 37.07,
bearing: -51.03
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "visible";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
             onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 1},
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: .4},
                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'broadbandlayer', opacity: .5},
                {layer: 'povertylayer', opacity: .5},
                {layer: 'vaclayer', opacity: 0},
            ],
        },


    //{
    //id: 'interlude',
    //alignment: 'center',
    //hidden: false,

    //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    //video: 'images/902-1_902-2364-PD2_preview.mp4',
    //location: {
     // center: [-74.00549, 40.67497],
                //zoom: 16,
                //pitch: 48.61,
               // bearing: 63.65,
    //},
//},


{
            id: 'chapter 13',
            alignment: 'center',
            hidden: false,
            title: 'CONCLUSION',
            image: '',
            //'images/hurricane-sandy-destroys-breezy-point-queens.jpg',
            description: 'The global tragedy of COVID-19 has been an ongoing concern since 2019, resulting in over a million deaths in the United States alone. Its repercussions have ranged from immediate consequences to chronic health issues, with the virus and its impact continuing to loom over our society, posing a continuous threat to public health. However, amidst this crisis, it has become evident that the virus’s effects and the access to a treatment have not been distributed equitably across the population. Racial minorities such as Black and Latin Americans were more vulnerably exposed to bear a heavy burden as their risk of hospitalization due to COVID-19 compared to the white population was 2.8 times higher while the mortality rate is each two times for Black and three times for Latin Americans higher than that of their white counterparts.  This phenomenon underscores not only the impact of the virus but also the prevailing inequities that racial minorities face in accessing basic urban hygiene and healthcare services in this country on a daily basis.',
            location: {
                center: [-97.49355, 39.92230],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,

            callback:() => {
                document.getElementById("legend1").style.visibility = "hidden";
                document.getElementById("legend2").style.visibility = "hidden";
                document.getElementById("legend3").style.visibility = "hidden";
                document.getElementById("legend4").style.visibility = "hidden";
                document.getElementById("legend5").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: .4},
                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'broadbandlayer', opacity: .5},
                {layer: 'povertylayer', opacity: .5},
                {layer: 'vaclayer', opacity: 0},
            ],

            onChapterExit: [
                {layer: 'nationlayer', opacity: 1},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'NA_poplayer', opacity: 1},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 0},        
            ],
        },

    ]
}