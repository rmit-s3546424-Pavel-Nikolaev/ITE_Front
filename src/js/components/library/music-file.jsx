import React, { Component } from 'react';
import MusicContainer from './music-container';

export default class MusicFile extends Component {
    render() {
        return (
            <section id="file-view">
                <div className="title">
                    <h2>Mary Had a Little Lamb</h2>
                    <h4>Sarah Josepha Hale</h4>
                </div>
                <MusicContainer type="Tablature" />
                <MusicContainer type="Traditional" />
            </section>
        );
    }
}
