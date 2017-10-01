import React, {Component} from 'react';
import Vex from 'vexflow';

let VF = Vex.Flow;

export default class VexFlow extends Component {

    constructor(props) {
        super(props);

        this._renderer = null;
        this._context = null;
    }

    componentDidMount() { this.handleProps() }
    
    handleProps() {

        const {
            width = 500,
            height = 500,
            font = [ 'Arial', 10, '' ],
            fontColor = '#eed',
            stave,
            notes,
        } = this.props;

        this._renderer = new VF.Renderer(
            this.refs.wrapper,
            VF.Renderer.Backends.SVG
        );

        this._renderer.resize(width, height);
        this._context = this._renderer.getContext();

        this._context
            .setFont(...font)
            .setBackgroundFillStyle(fontColor);

        stave.setContext(this._context).draw();
        Vex.Flow.Formatter.FormatAndDraw(this._context, stave, notes);
    }

    render() {

        return (
            <div className='vexflow' ref={'wrapper'}></div>
        );
    }
}