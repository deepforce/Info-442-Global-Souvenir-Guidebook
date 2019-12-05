import React from 'react';
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
        const detailstyle =  {
            marginLeft: "15%"
        }
        const imgstyle = {
            width: "80%"
        }
        const istyle = {
            fontSize: "24px"
        }
        const neststyle = {
            marginTop: "3%"
        }
        
        return (
            <div className="col-sm-6">
                <h1 className="display-1" style={detailstyle}>Store Name</h1>
                <hr/>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img className="w3-round" src="http://img.mm4000.com/file/2/7d/ff204289f9_1044.jpg" alt="store" style={imgstyle} />
                        <br/>
                        <div className="container" style={neststyle}>
        <i className='fas fa-map-marker-alt' style={istyle}></i> &nbsp;<span className="lead"> Location: {this.props.detail[0].Address} </span><br/>
        <i className='far fa-clock' style={istyle}></i> &nbsp;<span className="lead"> Service Hour: {this.convertTime(this.props.detail[0])}</span><br/>
        <i className='fas fa-phone' style={istyle}></i> &nbsp;<span className="lead"> Phone Number: {this.props.detail[0].PhoneNum}</span><br/>
        <i className='fas fa-globe-americas' style={istyle}></i> &nbsp;<span className="lead"> Website: <a href={this.props.detail[0].Website}>{this.props.detail[0].Website}</a></span><br/>
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

