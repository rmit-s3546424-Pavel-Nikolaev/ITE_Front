import React, { Component } from 'react';
import notes from './tabs/example'
import Vex from 'vexflow';
import VexFlow from './components/vexflow'

let VF = Vex.Flow;

class ShowTab extends Component {
    constructor(props) {
        super(props);
    }
    
render() {
    return (
        <div className='tab'>
            <VexFlow
                height={800}
                width={800}
                font={[ 'Arial', 10, '' ]}
                // (x_pos, y_pos, width)
                stave={ new Vex.Flow.Stave(0, 0, 400) }
                notes={ notes }
            />
        </div>
    );
}
}

export default ShowTab;

