import React from 'react';
// import View1 from '../view1/view1'
import { Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Map extends React.Component {
    Seattle = {lat: 47.608013, lng: -122.335167}
    googleMapRef = React.createRef()

    
    componentDidMount() {
        const googleScript = document.createElement('script')
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA2fl1w99v9hxk0LL4ryYm8xdZwy-R8xnE&libraries=places`
        window.document.body.appendChild(googleScript)
    
        googleScript.addEventListener('load', ()=>{
          this.googleMap = this.createGoogleMap()
          this.marker = this.createMarker()
          this.marker.addListener("click", this.setRedirect)
        })
        
    }
    createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 4,
      center: this.Seattle
    })
    createMarker = () => 
        new window.google.maps.Marker({
        position: this.Seattle,
        map: this.googleMap,
        })
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect to='/view1' />
            )
        }
    }

    render() {
    return (
      <div>
        
        {this.renderRedirect()}
        <div className={"jumbotron font-italic text-center"} style={{marginBottom: "0%", height: "220px"}}>
          <h1 style = {{marginTop: "6px"}}>Souvenir Guidebook</h1>
          <p>We are helping you to search the unique gifts/souvenirs for your friends and family!</p>
          <p>Click on the mark!</p>
        </div>
          
        <div id="map" style={{height: "600px", width: "100%"}}
        ref={this.googleMapRef}
        />
      </div>
    )
    }
}


export default Map;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
