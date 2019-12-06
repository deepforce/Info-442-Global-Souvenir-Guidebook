import React from 'react';
import ProductList from '../productlist/productlist.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class StoreDetail extends React.Component {
    
    convertTime (time) {
        var today = new Date()
        var day = today.getDay()
        if (day >= 1 && day <= 5) {
            if (time.WeekOpenTime === null)
                return "Closed"
            else
                return time.WeekOpenTime.substring(0,5) + " - " + time.WeekCloseTime.substring(0,5)
        }
        else if (day === 6) {
            if (time.SatOpenTime === null)
                return "Closed"
            else
                return time.SatOpenTime.substring(0,5) + " - " + time.SatCloseTime.substring(0,5)
        }
        else {
            if (time.SunOpenTime === null)
                return "Closed"
            else
                return time.SunOpenTime.substring(0,5) + " - " + time.SunCloseTime.substring(0,5)
        }
    }
    render() {
        const istyle = {
            fontSize: "24px"
        }
        const neststyle = {
            marginTop: "3%"
        }
        const linkstyle = {
            
            color: "blue"
        }
        return (
            <div >
                <hr/>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="container" style={neststyle}>
                            <i className='fas fa-map-marker-alt' style={istyle}></i> <span className="lead"><b>Location:</b> <p>{this.props.detail.data[0].Address}</p> </span>
                            <i className='far fa-clock' style={istyle}></i> <span className="lead"><b>Service Hour:</b> <p>{this.convertTime(this.props.detail.data[0])}</p></span>
                            <i className='fas fa-phone' style={istyle}></i> <span className="lead"><b>Phone Number:</b> <p>{this.props.detail.data[0].PhoneNum}</p></span>
                            <i className='fas fa-globe-americas' style={istyle}></i> <span className="lead"><b>Website:</b> <a style={linkstyle} href={this.props.detail.data[0].Website}><br></br>Visit</a></span>

                            <br></br>
                            <br></br>
                            <ProductList list = {this.props.detail.productList}/>
                        </div>
                    </div>
                </div>
            </div>
     
        )
        
    }
}


export default StoreDetail;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

