import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; // Aphrodite is a library styling React components

// const styles = {
//     backgroundColor: '#1f8dd6',
//     border: 0,
//     borderRadius: 2,
//     color: '#fff',
//     outline: 0,
//     padding: 10,
// }

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1f8dd6',
        border: 0,
        borderRadius: 2,
        color: '#fff',
        outline: 0,
        padding: 10,
    }
});

class Button extends Component {
    render() {
        return (
            <button
                // style={styles}
                className={css(styles.button)}
                onClick={this.props.onCLick}>
                {this.props.buttonText}
            </button>
        )
    }
}



export default Button;
