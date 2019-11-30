import React from 'react';

// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Search extends React.Component {
    
    render() {
    const search_style = {
        width: "60%",
        display: "inline-block"
    }
    return (  
        <div class="jumbotron text-center">
            <h1>Souvenir Guidebook</h1>
            <p>Type Anything in Your Mind!</p> 
            <input type="text" class="form-control" style= {search_style}/>
            <button type="button" onclick="searchButton()" class="btn btn-success">search</button>
        </div>
    )
    }
}


export default Search;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
