import React from 'react';
import "./view1.css"
import Search from '../search/search.js'
import Filter from '../filter/filter.js'
import List from '../list/list.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class View1 extends React.Component {
    
    render() {
    return (
      
      <div>
        <Search/>
        <div className={"container-fluid"}>
          <div className="row">
            <Filter />
            <List />
          </div>
            
        </div>
        
      </div>
    )
    }
}


export default View1;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
