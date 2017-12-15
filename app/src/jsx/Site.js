import React, { Component } from 'react';
import createReactClass from 'create-react-class';
//var createReactClass = require('cretate-react-class');

// class Site extends Component {
//     constructor() {
//         super();
//
//     }
//
//     getInitialState() {
//         return {
//             page: 0,
//             pages: [{
//                 'title': 'Home',
//                 'features': [{
//                     title: 'Home feature',
//                     active: false
//                 }, {
//                     title: 'Something else',
//                     active: false
//                 }]
//             }]
//         }
//     }
//
//     render() {
//         return (
//             <div className="test">
//                 test
//             </div>
//         );
//     }
// };

//export default Site;


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
           <div>test test test {title} </div>
       )
    }
    // render() {
    //    return (
    //        <div>test</div>
    //    )
    // }

});

export default Site;
