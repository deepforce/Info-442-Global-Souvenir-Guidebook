import React from 'react';
import { Link } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Item extends React.Component {
    
    render() {
    const item_style = {
        width: "290px", 
        height : "330px"
    }
    const parameters = {
        pathname: '/view2',
        state: { id:  this.props.id}
    }
    return (
        
            <div className="col-sm-6">
                <div className="cardItem" style={item_style} >
                    <img className="card-img-top" src="http://img.mm4000.com/file/2/7d/ff204289f9_1044.jpg" alt="Card" width="286px" height="180px" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.storename}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link style= {{alignContent: "center"}} to={parameters} className="btn btn-primary">Detail</Link>
                    </div>
                </div>
            </div>
    )
    }
}


export default Item;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
