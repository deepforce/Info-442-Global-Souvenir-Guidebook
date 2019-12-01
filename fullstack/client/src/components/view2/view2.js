import React from 'react';
import StoreDetail from '../storedetail/storedetail.js'
import ProductList from '../productlist/productlist.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class View2 extends React.Component {
    
    render() {
    const view2style =  {
        marginLeft: "10%",
        marginRight: "10%"
    }
    return (
        <div className="container-fluid" style = {view2style} >
            <StoreDetail />
            <ProductList />
        </div>
     
    )
    }
}


export default View2;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
