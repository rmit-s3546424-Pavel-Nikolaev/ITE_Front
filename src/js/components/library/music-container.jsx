import React, { Component } from 'react';
import notes from '../../tabs/example.js';
import Vex from 'vexflow';
import VexFlow from '../vexflow';

export default class MusicContainer extends Component {
    render() {
        return (
            <div className='tab'>
                <div className='tab-header'>
                    <div className='tab-title'>{this.props.type}</div>
                    <a href="#" className='tab-download-button'>Download</a>
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
