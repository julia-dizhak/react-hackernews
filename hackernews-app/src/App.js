import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            objectID: PropTypes.string.isRequired,
            author: PropTypes.string,
            url: PropTypes.string,
            num_comments: PropTypes.number,
            points: PropTypes.number
        })
    )
};

export default function App(props) {
    const list = [
        {
            title: 'React',
            url: 'https://facebook.github.io/react/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: '0',
        }, 
        {
            title: 'Redux',
            url: 'https://github.com/reactjs/redux',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: '1'
        }
    ];

    return (
        <ul className="posts-list">
            {
                list.map(function(item) {
                    return (
                        <li key={item.objectID} className="posts">
                            <article>
                                <header>
                                    <a className="title-link" href={item.url}>{item.title}</a>
                                </header>
                                <span>{item.author}</span>
                                <span>{item.num_comments}</span>
                                <span>{item.points}</span>
                            </article>    
                        </li>  
                    );
                })
            }        
        </ul>
        
    )
}

App.propTypes = propTypes;