import React from 'react';
import StoreDetail from '../storedetail/storedetail.js'
import ProductList from '../productlist/productlist.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class View2 extends React.Component {
    constructor () {
        super()
        this.state = {
            items: [],
            isLoaded: false
        }
        
    }
    componentDidMount() {
        fetch("http://localhost:3001/stores/" + this.props.location.state.id)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
    }
    render() {
        const view2style =  {
            marginLeft: "10%",
            marginRight: "10%"
        }
        var { isLoaded, items } = this.state
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
        return (
            <div className="container-fluid" style = {view2style} >
                <StoreDetail detail = {items.data} />
                <ProductList list = {items.productList}/>
            </div>
        
        )
        }

    }
}


export default View2;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
