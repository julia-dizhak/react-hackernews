import React, {Component} from 'react';

const staticList = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    }, 
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          list: staticList
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        const {list} = this.state;
        function isNotId(item) {
            return item.objectID !== id;
        }

        const updatedList = list.filter(isNotId);
        this.setState({list: updatedList});
    }

    render() {
        const {list} = this.state;

        return (
            <ul className="posts-list">
                {
                    list.map(item => {
                        return (
                            <article 
                                className="posts" 
                                key={item.objectID}>
                                <header>
                                    <a className="title-link" href={item.url}>{item.title}</a>
                                </header>
                                <span>{item.author}</span>
                                <span>{item.num_comments}</span>
                                <span>{item.points}</span>
                                <span>
                                    <button
                                        onClick={() => this.handleDelete(item.objectID)}
                                        type="button"> 
                                        Delete
                                    </button>
                                </span>
                            </article>  
                        );
                    })
                }         
            </ul>
            
        )
    }
}


