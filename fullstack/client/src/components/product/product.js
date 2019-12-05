import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Product extends React.Component {
    render() {
    return (
        <li>{this.props.productname}</li>
    )
    }
}


export default Product;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

