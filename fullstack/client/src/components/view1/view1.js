import React from 'react';
import "./view1.css"
import Search from '../search/search.js'
import Filter from '../filter/filter.js'
import List from '../list/list.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
class View1 extends React.Component {
    constructor () {
      super()
      this.changeFilter = this.changeFilter.bind(this)
      this.filter = {
        "product_type": "",
        "theme": "",
        "neighborhood": "",
        "for_whom": ""
      }
      this.refresh = false
    }
    changeFilter(filtertype, filtername) {
      this.filter[filtertype] = filtername
      this.refresh = !this.refresh
      console.log(this.filter)
    }
    render() {
    return (
      // <FilterContext.Provider>
      <div>
        <Search/>
        <div className={"container-fluid"}>
          <div className="row">
            <Filter changeFilter = {this.changeFilter}/>
            <List refresh = {this.refresh} filter = {this.filter}/>
          </div>
            
        </div>
        
      </div>
      // </FilterContext.Provider>
    )
    }
}


export default View1;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
