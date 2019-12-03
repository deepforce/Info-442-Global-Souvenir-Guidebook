import React from 'react';
import Item from '../item/item.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class List extends React.Component {
    // stores.data.map(item => <Item key = {item.StoreID} storename = {item.StoreName}/>)
    constructor () {
        super()
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        // console.log(this.context)
        fetch("http://localhost:3001/stores?page=0")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json.data
            })
        })
    }
    componentDidUpdate(prevProps) {
        const { filter, refresh } = this.props;
        if (prevProps.refresh !== refresh) {
            var basic_query = "http://localhost:3001/stores?page=0"
            for (var i in Object.keys(filter)) {
                if (filter[Object.keys(filter)[i]]!='')
                    basic_query+="&"+Object.keys(filter)[i]+"="+filter[Object.keys(filter)[i]]
            }
            fetch(basic_query)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.data
                })
            })
        }
      }

    render() {
            var { isLoaded, items } = this.state
            if (!isLoaded) {
                return <div>Loading...</div>
            }
            else if (items.length === 0)
                return (
                <div className={"col-sm-9 col-md-6 col-lg-8"}>
                <div className="container-fluid">
                    <p>No Results!</p>
                </div>
                </div>
                )
            else {
                return (
                    <div className={"col-sm-9 col-md-6 col-lg-8"}>
                        <div className="container-fluid">
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        <ul className="pager">
                                <li className="previous"><a href="#">Previous</a></li>
                                <li className="next"><a href="#">Next</a></li>
                        </ul>
                    </div>
                )
            }
    }
}


export default List;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
