import React from 'react';
import Tablature from './tablature.js';

export default class Home extends React.Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){

        return(
            <div className="tablature">
                <Tablature notation={`
                    tabstave notation=true tablature=false
                    notes Cn-D-E/4 F#/5
                `} />
            </div>
        )
    }
}