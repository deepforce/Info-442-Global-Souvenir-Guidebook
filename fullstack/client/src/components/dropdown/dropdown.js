import React from 'react';

// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Dropdown extends React.Component {
    showFilter () {

    }
    render() {
    return (  
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Product Type
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <li><button onClick={this.showFilter}>Food</button></li>
                <li><button onClick={this.showFilter}>Chocolate</button></li>
                <li><button onClick={this.showFilter}>Clothes</button></li>
                <li><button onClick={this.showFilter}>Jewelry</button></li>
                <li><button onClick={this.showFilter}>Book/Postcard</button></li>
                <li><button onClick={this.showFilter}>Decors</button></li>
                <li><button onClick={this.showFilter}>Plastic</button></li>
            </ul>
        </div>
        
    )
    }
}


export default Dropdown;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
