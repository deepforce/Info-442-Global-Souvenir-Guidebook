import React from 'react';
import StoreDetail from '../storedetail/storedetail.js'
import { Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class View2 extends React.Component {
    constructor () {
        super()
        this.state = {
            items: [],
            isLoaded: false,
            redirect: false
        }
        
    }
    handleClick =()=> {
        this.setState({redirect: true})
    }
    handleChange(event) {
        this.setState({searchtext: event.target.value})
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect to='/view1' />
            )
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
        const imgstyle = {
            width:"100%",
            height: "80%"
        }
        
        var { isLoaded, items } = this.state
        
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
        const img_url = "http://localhost:3001/images/stores/Store_"+items.data[0].StoreID+".jpg"
        return (
            <div>
                <div className="jumbotron text-center" style={{marginBottom: "0%", height: "150px"}}>
                <h1 style={{marginTop: "0px"}}>Souvenir Guidebook</h1>
                </div>
                {this.renderRedirect()}
                <button className="btn btn-light" onClick={this.handleClick} style={{border: "groove"}}>
                    <span className="oi oi-caret-left"></span>&nbsp;&nbsp;Back
                </button>
                <br></br>
                <br></br>
                <h1 className="display-1" style={{marginLeft: "15%"}}>{items.data[0].StoreName}</h1>
                <div className="container-fluid" style = {view2style} >
                
                    {/* <div className="col-sm-6"> */}
                        <hr />
                        <img className="w3-round" src={img_url} alt="store" style={imgstyle}/>
                    {/* </div> */}
                    <StoreDetail detail = {items} />
                </div>
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
