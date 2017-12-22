import React, { Component } from 'react';
import createReactClass from 'create-react-class'; // let createReactClass = require('create-react-class');

import '../css/Site.css'
import Jumbotron from './Jumbotron';
import Greeting from './Greeting';

let App = createReactClass({
    getInitialState: function() {
        return {
            page: 0,
            pages: [{
                'title': 'Home',
                'features': [{
                    title: 'Home feature',
                    active: false
                }, {
                    title: 'Something else',
                    active: false
                }]
            }]
        }
    },

    render: function () {
        let title = 'fake';

        return (
            <div className='container'>
                <Greeting />
                <Jumbotron
                    mainText='Welcome to React'
                    subText='This is an example for jumbotron'
                    desc='here is description'
                    number={5}
                />
            </div>
       )
    }
});

export default App;
