import React from 'react';
import Item from '../item/item.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class List extends React.Component {
    // stores.data.map(item => <Item key = {item.StoreID} storename = {item.StoreName}/>)
    constructor () {
        super()
        this.changePage = this.changePage.bind(this)
        this.state = {
            items: [],
            isLoaded: false,
            refresh: false,
            pagination: [],
            page_num: 0,
        }
    }
    changePage (operation) {
        console.log("Changing")
        const op = this.state.pagination[operation]
        this.setState({page_num: op})
    }
    componentDidMount() {
        // console.log(this.context)
        fetch("http://localhost:3001/stores?page="+this.state.page_num)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json.data,
                pagination: json.pagination
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const { filter, refresh, search} = this.props;
        const { page_num } = this.state;
        // console.log("page_num: "+page_num)
        // console.log("p_page_num: "+prevState.page_num)
        // console.log("refresh: "+refresh)
        // console.log("p_refresh: "+prevProps.refresh)
    
        if (prevProps.refresh !== refresh || prevState.page_num!== this.state.page_num) {
            var basic_query = "http://localhost:3001/stores?page="+this.state.page_num
            for (var i in Object.keys(filter)) {
                if (filter[Object.keys(filter)[i]]!=='')
                    basic_query+="&"+Object.keys(filter)[i]+"="+filter[Object.keys(filter)[i]]
            }
        
            
            if (search!=='')
                basic_query+="&search_text="+search

            console.log(basic_query)
                fetch(basic_query)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json.data,
                        pagination: json.pagination
                    })
            })   
        } 
            
        
      }

    render() {
            var { isLoaded, items, pagination } = this.state
            
            
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
            else if (typeof pagination.next != 'undefined' && typeof pagination.previous != 'undefined'){
                return (
                    <div className={"col-sm-9 col-md-6 col-lg-8"}>
                        <div className="container-fluid">
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        
                        <ul className="pager">
                                <li onClick = {()=>this.changePage("previous")} className="previous"><a href="#">Previous</a></li>
                                <li onClick = {()=>this.changePage("next")} className="next"><a href="#">Next</a></li>
                        </ul>
                    </div>
                )
            }
            else if (typeof pagination.next != 'undefined') {
                return (
                    <div className={"col-sm-9 col-md-6 col-lg-8"}>
                        <div className="container-fluid">
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        
                        <ul className="pager">
                        <li onClick = {()=>this.changePage("next")} className="next"><a href="#">Next</a></li>
                        </ul>
                    </div>
                )
            }
            else if (typeof pagination.previous != 'undefined') {
                return (
                    <div className={"col-sm-9 col-md-6 col-lg-8"}>
                        <div className="container-fluid">
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        
                        <ul className="pager">
                        <li onClick = {()=>this.changePage("previous")} className="previous"><a  href="#">Previous</a></li>
                        </ul>
                    </div>
                )
            }
            else {
                return (
                    <div className={"col-sm-9 col-md-6 col-lg-8"}>
                        <div className="container-fluid">
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
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
