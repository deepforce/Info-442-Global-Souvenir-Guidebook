import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class StoreDetail extends React.Component {
    constructor () {
        super()
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/stores")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json.data
            })
        })
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
                            <i className='fas fa-map-marker-alt' style={istyle}></i> &nbsp;<span className="lead"> Location </span><br/>
                            <i className='far fa-clock' style={istyle}></i> &nbsp;<span className="lead"> Service Hour</span><br/>
                            <i className='fas fa-phone' style={istyle}></i> &nbsp;<span className="lead"> Phone Number</span><br/>
                            <i className='fas fa-globe-americas' style={istyle}></i> &nbsp;<span className="lead"> Website</span><br/>
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

