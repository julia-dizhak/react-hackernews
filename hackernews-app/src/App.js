import React, {Component} from 'react';
import Button from './Button';
import FlipMove from 'react-flip-move';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';

const url = `${PATH_BASE}${PATH_SEARCH}`;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    displayStories(result) {
        this.setState({list: result});
    }

    componentDidMount() {
        fetch(url)
        .then(
              response => response.json()
        )
          .then(
              data => this.displayStories(data.hits)
        )
        .catch(error => error);
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
                <FlipMove>
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
                                    <Button
                                        onClick={() => this.handleDelete(item.objectID)}
                                        type="button"> 
                                        Delete
                                    </Button>
                                </span>
                            </article>  
                        );
                    })
                }
                </FlipMove>         
            </ul>
            
        )
    }
}


