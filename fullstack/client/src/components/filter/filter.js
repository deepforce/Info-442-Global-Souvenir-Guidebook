import React from 'react';
import Dropdown from '../dropdown/dropdown.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Filter extends React.Component {
    
    render() {
    const filter_style = {
        marginLeft: "20%"
    }
    return (  
            <div class="row">
                <div class="col-sm-3 col-md-6 col-lg-4">
                        <div class="container" style={filter_style} >
                            <h2>Filters</h2>
                            <Dropdown />
                            <br/>
                        </div>
                        <br/>
                </div>
            </div>
    )
    }
}


export default Filter;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
