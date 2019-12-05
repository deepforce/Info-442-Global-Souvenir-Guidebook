import React from 'react';
import { Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchtext: "",
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({searchtext: event.target.value})
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect to='/' />
            )
        }
    }
    handleClick =()=> {
        this.setState({redirect: true})
    }
    render() {
    const search_style = {
        width: "30%",
        display: "inline-block",
        marginTop: "0%",
        marginBottom: "0%"
    }
    return (
        <div>
        <div className="jumbotron text-center" style={{marginBottom: "0%"}}>
            <h1>Souvenir Guidebook</h1>
            <div>
            <input type="text" onChange = {this.handleChange} placeholder="anything in your mind...." aria-label="Search" className="form-control" style= {search_style}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={()=>this.props.changeSearch(this.state.searchtext)} className="btn btn-success" style={{marginTop: "0%", marginBottom: "0%"}}>search</button>
            </div>
        </div>
        <div >
            {this.renderRedirect()}
            <button className="btn btn-light" onClick={this.handleClick} style={{border: "groove"}}>
                <span className="oi oi-caret-left"></span>&nbsp;&nbsp;Back
            </button>
        </div>
        </div>  
    )
    }
}


export default Search;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
