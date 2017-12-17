import React, { Component } from 'react';
import createReactClass from 'create-react-class';
//var createReactClass = require('cretate-react-class');

import './../Site.css'
import Jumbotron from './Jumbotron';

let Site = createReactClass({
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
        var title = 'fake';

        return (
            <div className='container'>
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

export default Site;
