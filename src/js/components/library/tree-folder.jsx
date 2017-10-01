import React from 'react';

/*
    Ideally, this would take in a folder object and recursively build it's tree
*/

export default class TreeFolder extends React.Component {
    render() {
        return (
            <div className="file-folder"><i className="fa fa-caret-down"></i><i className="fa fa-folder"></i>{this.props.title}</div>
        )
    }
}