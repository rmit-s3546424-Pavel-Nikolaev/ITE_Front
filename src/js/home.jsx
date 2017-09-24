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
                <Tablature />
            </div>
        )
    }
}