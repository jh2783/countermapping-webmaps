

var storymapConfig = {
            style: 'mapbox://styles/mapbox/light-v11',
            accessToken: 'pk.eyJ1IjoiamgyNzgzIiwiYSI6ImNsbjF0eTNlODAxeDQzNGwyMHlvZmRraDAifQ.SGj4IJiMd_rTm4oqEvJlTw',
            showMarkers: true,
            markerColor: '#3FB1CE',
            theme: 'light',
            use3dTerrain: false,
            title: 'STORYTELLING MAP',
            subtitle: 'A descriptive and interesting subtitle to draw in the reader',
            byline: 'By a Digital Storyteller',
            footer: 'Source: source citations, etc.',
            chapters: [
                {
                    id: 'chapter-1',
                    alignment: 'left',
                    hidden: false,
                    title: 'Chapter 01',
                    image: './path/to/image/source.png',
                    description: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        <a href="https://example.com">Learn More</a>`,
                    location: {
                        center: [-122.418398, 37.759483],
                        zoom: 8.5,
                        pitch: 60,
                        bearing: 0
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: false,
                    callback: '',
                    onChapterEnter: [],
                    onChapterExit: []
                },

                // {
                //    id: 'chapter-1',
                //    alignment: 'left',
                //    hidden: false,
                //    title: 'Chapter 01',
                //    image: './path/to/image/source.png',
                //    description: `
                //        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                //        <a href="https://example.com">Learn More</a>`,
                    location: {
                //        center: [-122.418398, 37.759483],
                //        zoom: 8.5,
                //        pitch: 60,
                //        bearing: 0
                //    },
                //    mapAnimation: 'flyTo',
                //    rotateAnimation: false,
                //    callback: '',
                //    onChapterEnter: [],
                //    onChapterExit: []
                //},
                
            ]
        };

