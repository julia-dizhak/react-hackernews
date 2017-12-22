import React, { Component } from 'react';

class PrimaryButton extends Component {
    render() {
        return (
            <a
                className='btn btn-primary btn-lg'
                href='javascript:;'
                role='button'>
                {this.props.buttonText}
            </a>
        )
    }
}

export default PrimaryButton;
