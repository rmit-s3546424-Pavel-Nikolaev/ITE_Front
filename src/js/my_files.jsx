import React, { Component } from 'react';
import {clearMsg} from './utils/utilities';

class MyFiles extends Component {
    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
        this.onRefresh();
        this.files = [];
    }

    onRefresh() {
        // Placeholder until we have the lamda
        return null;
    }
    
    render() {
        const files = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const browserItems = files.map((number) =>
            <div className="file">
                <div className="file-icon">
                </div>
                <div className="file-label">
                </div>
            </div>
        );
        
        return (
            <div className="file-browser-container">
                <div className="file-browser-header">
                    <a className="blue button refresh-button">Refresh</a>
                </div>
                <div className="file-browser-content">
                    {browserItems}
                </div>
            </div>
        );
    }
}

export default MyFiles;