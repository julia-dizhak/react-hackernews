import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
}, defaultProps = {
    type: 'button'
};;

export default function Button(props) {
    const {onClick, className='button-default', type, children} = props;

    return (
        <button
            onClick={onClick}
            className={className}
            type={type}> 
           {children}
        </button>
    )
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
