import React from 'react';
import SideBar from './library/sidebar';
import MusicFile from './library/music-file';
import {clearMsg} from './../utils/utilities';

export default class Library extends React.Component {
    componentDidMount() {
        clearMsg();
    }

    render() {
        return (
            <div id="library">
                <SideBar />
                <MusicFile />
            </div>
        )
    }
}