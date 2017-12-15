import React, { Component } from 'react';
import createReactClass from 'create-react-class';
//var createReactClass = require('cretate-react-class');

import Button from './Button';

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
            <div>
                <Button />
                <Jumbotron />
            </div>
       )
    }
});

export default Site;
