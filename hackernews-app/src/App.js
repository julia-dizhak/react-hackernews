import React from 'react';

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

export default function App(props) {
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
