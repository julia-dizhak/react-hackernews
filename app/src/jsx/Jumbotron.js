import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton';
import Button from './Button';

class Jumbotron extends Component {
    render () {
        return (
            <div className='jumbotron'>
                <h1>{this.props.mainText}</h1>
                <h2>{this.props.subText}</h2>
                <p>{this.props.desc} - {this.props.number}</p>
                <div>
                    <PrimaryButton
                        buttonText='Learn more'/>
                </div>
                <div className="buttons">
                     <Button buttonText='Learn more' />
                     <Button buttonText='Learn more and more' />
                     <Button buttonText='Learn more and more and more' />
                </div>

            </div>
        )
    }
}

Jumbotron.propTypes = {
    mainText: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
    desc: PropTypes.string,
    number: PropTypes.number
};


export default Jumbotron;
