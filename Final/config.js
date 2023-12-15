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
    para1: 'The global tragedy of COVID-19 has been an ongoing concern since 2019, resulting in over a million deaths in the United States alone. Its repercussions have ranged from immediate consequences to chronic health issues, with the virus and its impact continuing to loom over our society, posing a continuous threat to public health. However, amidst this crisis, it has become evident that the virus’s effects and the access to a treatment have not been distributed equitably across the population. Racial minorities such as Black and Latin Americans were more vulnerably exposed to bear a heavy burden as their risk of hospitalization due to COVID-19 compared to the white population was 2.8 times higher while the mortality rate is each two times for Black and three times for Latin Americans higher than that of their white counterparts. (Tai) This phenomenon underscores not only the impact of the virus but also the prevailing inequities that racial minorities face in accessing basic urban hygiene and healthcare services in this country on a daily basis.',
    para2: 'Especially, this endeavor aims to highlight the often-overlooked challenges faced by Native Americans during this crisis. Despite their heightened vulnerability to severe outcomes, their data remains underreported or inaccurately categorized as "other" in surveys. The focus of the project is to visualize and compare the experiences of Native Americans within broader societal demographics, highlighting the possible factors impacting disparities in healthcare access experienced by racial minorities. While COVID-19 itself is not racist, the systemic inequities exacerbating the struggles faced by Native Americans during this global health crisis distinctly reflect racial biases.',
    footer: '<br>SOURCES</br><br>Blake, John. “Native Americans Were Already Decimated by a Virus. They’re Scared It Could Happen Again.” CNN, Cable News Network, 14 Apr. 2020, www.cnn.com/2020/04/14/us/native-americans-coronavirus-blake/index.html. </br>McLaughlin, Sue. "Traditions and Diabetes Prevention: A Healthy Path for Native Americans." Diabetes Spectr. 1 January, 2010. pp. 272–277. https://doi.org/10.2337/diaspect.23.4.272.</br>Bryan, Molly, et al. “Coronavirus disease 2019 (COVID-19) mortality and neighborhood characteristics in Chicago”, Annals of Epidemiology, Volume 56, 2021, pp. 47-54. https://doi.org/10.1016/j.annepidem.2020.10.011.</br>Timmons Heather, Heather. “U.S. Poor Died at Much Higher Rate from Covid Than Rich, Report Says.” Reuters, 4 Apr. 2022, www.reuters.com/world/us/us-poor-died-much-higher-rate-covid-than-rich-report-2022-04-04/.</br>Bouabida K, Lebouché B, Pomey MP. Telehealth and COVID-19 Pandemic: An Overview of the Telehealth Use, Advantages, Challenges, and Opportunities during COVID-19 Pandemic. Healthcare (Basel). Nov 16, 2022. doi: 10.3390/healthcare10112293.</br> Michaels IH, Pirani SJ, Carrascal A. Disparities in Internet Access and COVID-19 Vaccination in New York City. Preventing Chronic Disease. 2021. DOI: http://dx.doi.org/10.5888/pcd18.210143.</br>CBS Interactive. April 18, 2020. Longstanding issues put Native American communities at high COVID-19 risk. CBS News. https://www.cbsnews.com/news/coronavirus-pandemic-poverty-overcrowding-native-american-communities-navajo-shoshone-tribes/ </br>Huang W, Hernandez I, Tang S, Dickson S, Berenbrok LA, Guo J. Association between distance to community health care facilities and COVID-19-related mortality across U.S. counties in the COVID-19-vaccine era. BMC Res Notes. Jun 5, 2023. doi: 10.1186/s13104-023-06366-3.</br> Stacke, Sarah. “On One Native American Reservation, Vaccine Hesitancy Has Long Historical Roots.” The Nation, 1 July. 2021, www.thenation.com/article/society/coronavirus-native-american-vaccine/. <br>Tai DBG, Sia, Irene, et al. Disproportionate Impact of COVID-19 on Racial and Ethnic Minority Groups in the United States: a 2021 Update, Oct 13, 2021. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8513546/.  <br> <br> <br> <br><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template',


    chapters: [

        {
            id: 'chapter 2',
            alignment: 'center',
            hidden: false,
            title: 'THE 1520s-1850s: CENTURIES OF HEALTH CHALLENGES',
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/65195-great-dying-mortal-sickness-full.jpg?raw=true',
            //'images/hurricane-sandy-destroys-breezy-point-queens.jpg',
            description: 'With the arrival of the colonists in the late 15th century, Native Americans were confronted by deadly viruses like flu, measles, and smallpox, previously unknown to them. Since then, those diseases resulted in a devastating loss of 90% of the Native American population over three decades. (Woodward) This period saw the deliberate use of diseases like smallpox by Colonist troops, displacing Indigenous populations from their territories. <br><br> Reflecting on this history, Glancy, a descendant of the Cherokee tribe, observed, "It was disease more than the cavalry that defeated the Indians," highlighting the immense impact illnesses had on altering the fate of Indigenous communities alongside military forces.',
            image2: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/graph_1.png?raw=true',
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
            title: 'The 2000s: LINGERING LEGACY IN THE 21ST CENTURY',
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/NativeAmericanDoctors1-800.jpg?raw=true',
            description: 'This enduring legacy of racial challenges in the matter of healthcare faced by the Native American population remains unresolved still in the 21st century. The disparities rooted in European colonization due to the government and the public’s systematic and social neglect are clearly depicted in the data. For instance, the diabetes rate among Native Americans stands at 16%, nearly double the 8.7% rate among white individuals. (Bryan, Molly, et al.) Moreover, rates of cancer, alcoholism, stroke, and depression are significantly elevated within this community compared to other racial groups. The pandemic further intensified these health challenges among a vulnerable population already burdened by existing health issues and inadequate infrastructure.',
            image2: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/native%20ameircan%20disease%202.png?raw=true',
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
            title: '2019-2023: CONTINUATION DURING COVID-19 PANDEMIC',
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/g-100000008523221-promo-videoSixteenByNine3000.png?raw=true',
            description: 'In 2019, the echoes of a devastating pandemic resounded once more. COVID-19 infiltrated and devastated Native American communities, exacerbating their existing health challenges and slashing their life expectancy by 6.5 years. (Kelliher) Their hospitalization and mortality rates surpassed those of any other racial group, signaling disparities that cannot be dismissed as mere coincidence. These disparities stem from systemic ignorance within healthcare and social welfare in the U.S. society. Underfunded medical services, poverty, and spatial isolation (McPhillips) only accelerated the disparities along the ignorance. <br><br> Although the data on the Native American population is often omitted, the incomplete data during the pandemic highlights both intentional segregation in American history and the ongoing struggles affected by it, calling for the urgent need for systemic reform to address the deeply embedded health inequalities faced by Native American communities.',
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
            ],

            onChapterExit: [
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'camplayer', opacity: 1},
                {layer: 'therapeuticlayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 0},
                {layer: 'vaclayer', opacity: 1},
                {layer: 'nationlayer', opacity: 1},        
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
            title: 'HIGHER VACCINATION RATE, HIGHER MORTALITY',
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/Vaccination%20graph.png?raw=true',
            description: 'Native Americans recorded the highest vaccination rate during the pandemic peak period in 2021. However, the vaccine did not guarantee the communities safety. Indeed, their hospitalization and death rates are the highest among other racial groups. What could cause the discrepancy?',
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
            title: '1. ECONOMIC FACTOR: POVERTY AND SCARCITY',
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/Untitled-1.png?raw=true',
            description: 'COVID-19 as a Disease of Poverty: <br> In the U.S., the death rate in the lowest income counties was recorded as five times higher than those in the highest income counties, (Timmons) and continuously reproduces the cycle of poverty, leading to unemployment and lower income. (Shahzad) <br><br> Native Americans Below Poverty line: <br> However, according to census data, 27% of the Native Americans lived below the poverty line in 2022 while the national average of the households living in poverty is 11.5%. Consequently, issues like food insecurity, substandard housing conditions, and the unaffordability of medical care arise due to poverty, potentially impacting the population’s mortality rate.',
            image2: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/pov.png?raw=true',
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
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/navajo3.png?raw=true',
            description: 'Navajo Nation stands as one of the hardest-hit reservations during the COVID-19 outbreak. The lockdowns and stay-at-home orders severely impacted tourism and employment continuity, leaving Native Americans in the area suddenly without income. Amid efforts to combat the virus, basic measures such as handwashing and quarantine became challenging with the scarcity of running water and unaffordability of personal space. Nearly 30% of the Navajo Nation’s residents contend with the absence of running water, exposing them to heightened risks of bacterial and viral contamination while procuring water resources. The pervasive poverty, underfunded infrastructure, and limited government initiatives insufficiently addressing their challenges have further widened health disparities for both individuals and the community at large.',
            image2:'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/water.webp?raw=true',
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
                {layer: 'povertylayer', opacity: 0.6},
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
            title: '2. SOCIAL FACTOR: digital divide',
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/At-Home-Covid19-Tests.jpg?raw=true',
            description: 'COVID-19, Telehealth, and Connectivity: <br> The utilization of telehealth and telemedicine in the U.S. surged by 13,000% during the pandemic (Bouabida, et al.), driven by the imperative need for physical distancing, stay-at-home directives, and the shortage of hospital capacities. However, the distribution of self-testing kits and medical treatments heavily relies on internet connectivity, sidelining households lacking access to the crucial resource. Researchers underscore that internet access has emerged as a pivotal "social determinant of health" in contemporary times, (Michaels) highlighting its profound impact on healthcare amid the pandemic. Additionally, the absence of connectivity during periods of isolation deepened feelings of depression across tribal communities. <br><br> Native Americans’ Low Broadband Usage: <br>In 2019, the American Indian Policy Institute (AIPI) found that only 18 percent of tribal lands do not have access to Broadband Internet, however, the actual usage of high-speed Broadband on the map, which is based on 2020 data Microsoft provided, turned out way lower than the availability. Internet connectivity in these areas frequently proves unstable and financially inaccessible, offering only minimal speeds or, in some cases, no connection at all. Moreover, many residents lack the necessary devices to access this connectivity. A member of the Navajo Nation testified "We had a carload of six people coming out here to be tested with possible exposure, but none of them had phones."(CBS Interactive)',
            image2:'',
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
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/BF01_RGBB-1.jpg?raw=true',
            description: 'The Blackfeet reservation, situated at the northern end of Montana near Glacier National Park, faces limited urban development. In 2022, only 658 locations had broadband access, leaving 3,235 locations unserved. Within the tribe, households with internet access averaged 17 connected devices, overwhelming the network. (Chaney) This instability, coupled with reduced tourism income, led to financial, educational, and social challenges. To address this, the federal government invested $1 billion in pandemic relief to reconstruct internet infrastructure. Continuous attention and support from both the public and government are crucial until broadband is accessible to all community members.',
            image2: '',
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
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/delivering.webp?raw=true',
            description: 'COVID-19 and Travel Distance: <br>Research found a tight relationship between the death rate due to the virus and the proximity to a community healthcare facility. Residents living farther from a facility had higher COVID-19 mortality across the U.S. This association is particularly pronounced in Black and Hispanic neighborhoods than the White neighborhoods, (Huang, et al) posing challenges in responding to urgent medical needs. <br><br>Therapeutic Centers in Reservations:<br>The number of therapeutic centers is not equally distributed based on population density, leaving Native American reservations particularly underserved with very few centers and limited funding. In some cases, tribes lack permanent medical facilities altogether. The significant distance to access healthcare services outside the reservation delays medical attention and hampers necessary treatments.',
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
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/chapter%2010.jpg?raw=true',
            description: 'Historic Distrust:<br> On the Cheyenne River reservation, many residents express hesitancy toward the vaccines and medical treatments provided by the historically suppressive government. This reluctance is deeply rooted in a history marked by cruelty and betrayal, extending to the realm of medical care. (Stacke) Now, the reservation lacks a permanent medical center within its territory, forcing individuals to travel to the another tribe’s reservation, drive for 2.5 hours, or cross the river for essential care. To bridge the gap caused by this distance, licensed medical professionals temporarily visit individual households and engage in outreach calls to disseminate vital information.',
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
            image: "https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/chapter%2011.jpg?raw=true",
            description: 'Underfunded System:<br>Even though people want to get a service, the facilities are always under pressure, making the service unavailable for many of the residents. The only Indian Health Services on the reservation, The Fort Yates Hospital, has been struggle with shortage of medical professional and long waiting time even before the virus spread. “Our babies cannot be born on our reservation,” a tribe member said. (Waasbergen) The facility is almost 60 years old, with limited equipment such as a CT scanner.',
            location: {
                center: [-100.95564, 45.57763],
zoom: 8.54,
pitch: 44.72,
bearing: -75.13
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
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 1},
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
            image: 'https://github.com/jh2783/countermapping-webmaps/blob/main/Final/images/virus_cell.png?raw=true',
            description: 'Conclusion: <br> In summary, the project examined factors contributing to the unusually high vaccination rates among Native American populations, despite their correlation with increased hospitalizations and mortality. The methodology involved data collection from government sources, medical organizations, and technology corporations, supplemented by case studies sourced from online news websites. Recognizing the exclusion of Native American narratives in various national surveys, including federal census data, the aim was to spotlight their challenges in these three main categories with personal and pertinent stories. <br> <br> While we often refer to our world as a global village interconnected by technology, the pandemic period has starkly demonstrated that this connectivity does not equally apply to racial minorities, particularly Native Americans facing longstanding systemic discrimination. Issues such as poverty, limited internet access, and underfunded healthcare facilities underscore the urgent need for significant improvements in safeguarding the human rights of the Native Americans. <br> <br>Limitation:<br>The map have limitations due to the scale of accessible data and the time sensitive setting of the pandemic. Many maps do not match the Native American reservation camp location as well as informal living locations as units are often county-level while the camps sit on several counties. Also, the geographic data focuses mostly on the external factors within cities and states rather than internal factors such as lifestyle and family structure, limiting the understanding of the racial health disparity issues in a certain perspective. Moreover, despite the data spanning from 2020 to 2023, the pandemic’s fluidity means that a mere year can introduce substantial inaccuracies, highlighting the temporal sensitivity of the information. If the project has more time to improve, narrowing the data timeframe becomes imperative to ensure accuracy and relevance within a more constrained time frame.',
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
                {layer: 'NA_poplayer', opacity: 0},
                {layer: 'broadbandlayer', opacity: 0},
                {layer: 'povertylayer', opacity: 1},
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