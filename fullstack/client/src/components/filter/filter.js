import React from 'react';
import Dropdown from '../dropdown/dropdown.js'
import filterData from '../filter/filterData.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Filter extends React.Component {
    dropdownComponents = filterData.map(filter => <Dropdown key = {filter.id} id = {filter.id} name = {filter.name} changeFilter = {this.props.changeFilter}/>)
    render() {
    const filter_style = {
        marginLeft: "20%"
    }
    return (  
                <div className={"col-sm-3 col-md-6 col-lg-4"}>
                        <div className={"container"} style={filter_style} >
                            <h2>Filters</h2>
                                {this.dropdownComponents}
                            <br/>
                        </div>
                        <br/>
                </div>
    )
    }
}


export default Filter;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
