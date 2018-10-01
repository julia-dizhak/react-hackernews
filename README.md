# Render posts by using [HackerNews API](https://hn.algolia.com/api/v1/search?query=redux)

API is [HackerNews API](https://github.com/HackerNews/API)

[demo](https://julia-dizhak.github.io/react-blog-posts/posts/demo/) with full finctionality 

The repo will give you a basic understanding of ReactJS through building a very simple app.

## Setup
* clone repo
* git reset --hard v1.0 
* cd hackernews-app
* activate a node version (nvm use v8.12.0)
* yarn install 
* yarn start
* and browser open by default to http://localhost:3000

## Tags
* v1.0 - initial setup by create-react-app
* v1.1 - create a simple component
* v1.2 - render a list of items (sample data)
* v1.3 - fecth the data from external API

How to use tags
```
$ git reset --hard v1.?
```

### Assignaments

#### Assignament 1
* create 2 components: UserInput and UserOutput
* UserInput should hold an input element, UserOutput two paragraphs
* output multiple UserOutput components in the App component (any paragraph texts of your choice)
* pass a username (of your choice) to UserOutput via props and display it there
* add state to the App component (=> the username) and pass the username to the UserOutput component
* add a method to manipulate the state (=> an event-handler method)
* pass the event-handler method reference to the UserInput component and bind it to the input-change event
* ensure that the new input entered by the user overwrites the old username passed to UserOutput
* add two-way-binding to your input (in UserInput) to also display the starting username
* add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

#### Assignament 2
* validate props for your custom component