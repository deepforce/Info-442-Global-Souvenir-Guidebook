import React from 'react';
import Product from '../product/product.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class ProductList extends React.Component {
    productComponent = this.props.list.map(item => <Product key = {item.ProductID} productname = {item.ProductName}/>)
    render() {
       
            return (
                <div className="col-sm-6">
                    <h1>Product Listing</h1>
                    <ul>
                        {this.productComponent}
                    </ul>
                    <hr/>
                </div>
        
            )
    }
}


export default ProductList;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

