import React from 'react';

// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {searchtext: ""};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({searchtext: event.target.value})
    }
    
    render() {
    const search_style = {
        width: "30%",
        display: "inline-block",
        marginTop: "0%",
        marginBottom: "0%"
    }
    return (  
        <div className="jumbotron text-center">
            <h1>Souvenir Guidebook</h1>
            <div>
            <input type="text" onChange = {this.handleChange} placeholder="anything in your mind...." aria-label="Search" className="form-control" style= {search_style}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={()=>this.props.changeSearch(this.state.searchtext)} className="btn btn-success" style={{marginTop: "0%", marginBottom: "0%"}}>search</button>
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
