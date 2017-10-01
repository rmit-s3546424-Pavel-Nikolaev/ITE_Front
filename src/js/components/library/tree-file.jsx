import React from 'react';

// Should support adding .selected to one

export default class TreeFile extends React.Component {
    render() {
        return (
            <div className="file-music" ><i className="fa fa-music"></i>{this.props.title}</div>
        )
    }
}