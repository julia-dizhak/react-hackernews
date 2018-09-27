# Render posts by using [HackerNews API](https://hn.algolia.com/api/v1/search?query=redux)

api is [HackerNews API](https://github.com/HackerNews/API)

demo is ... 

## Tags
* v1.0 - initial setup by create-react-app
* v1.1 - create an simple component
* v1.2 - render a list of items (sample data)
* v1.3 - fecth the data from external API

How to use tags
```
$ git reset --hard v1.?
```

### Assignament
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
