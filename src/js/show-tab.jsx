import React, { Component } from 'react';
import notes from './tabs/example'
import Vex from 'vexflow';
import VexFlow from './components/vexflow'

class ShowTab extends Component {
render() {
    return (
        <div className='tab'>
            <div className='tab-header'>
                <div className='tab-title'>
                    Tablature
                </div>
                <div className='tab-download-button'>
                    Download
                </div>
            </div>
            <VexFlow
                height={80}
                width={300}
                font={[ 'Arial', 10, '' ]}
                // (x_pos, y_pos, width)
                stave={ new Vex.Flow.Stave(0, 0, 300) }
                notes={ notes }
            />
            <VexFlow
                height={80}
                width={300}
                font={[ 'Arial', 10, '' ]}
                // (x_pos, y_pos, width)
                stave={ new Vex.Flow.Stave(0, 0, 300) }
                notes={ notes }
            />
        </div>
    );
}
}

export default ShowTab;

