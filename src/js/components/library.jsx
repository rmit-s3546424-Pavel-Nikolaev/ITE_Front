import React from 'react';
import SideBar from './library/sidebar';
import MusicFile from './library/music-file';

export default class Library extends React.Component {
    render() {
        return (
            <div id="library">
                <SideBar />
                <MusicFile />
            </div>
        )
    }
}