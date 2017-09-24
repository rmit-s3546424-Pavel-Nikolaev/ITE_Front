// IMPORTANT NOTE: 
// VexTab is not free for commercial use:
//   "This implementation is free for non-commercial use."
// VexFlow is open-source under an MIT license (free with crediting)
// VexTab provides a layer on top of VexFlow that allows one to write tablature notation:
//   "Note that the underlying library, VexFlow, is completely open source and distributed
//    under the MIT license."
// Quotes are from the VexFlow and VexTab documentation/websites

import React from 'react';
import vextab from '../../node_modules/vextab/releases/vextab-div';

export default class Tablature extends React.Component {
    componentDidMount() {
        // Whole Vextab object: vextab
        // Vextab Div: vextab.Div
        const VexTab = vextab.VexTab;
        const Artist = vextab.Artist;
        const Renderer = vextab.Flow.Renderer;

        const element = document.querySelector('#notation');

        // Create VexFlow Renderer from canvas element with id #notation.
        // const renderer = new Renderer(element, Renderer.Backends.CANVAS);

        // For SVG, you can use the following line (make sure #notation is a div element)
        const renderer = new Renderer(element, Renderer.Backends.SVG);

        // Initialize VexTab artist and parser.
        const artist = new Artist(10, 10, 600, {scale: 2});
        const vextabParser = new VexTab(artist);

        try {
            // Parse VexTab music notation passed in as a string.
            vextabParser.parse(`
                tabstave notation=true
                notes 4-5-6/3 10/4
            `);

            // Render notation onto canvas.
            artist.render(renderer);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return <div id="notation" />
    }
}