import React from 'react'
import ReactDOM from 'react-dom';
import './popup.css'

export default class PopUp extends React.Component{
    constructor(){
      super();
      this.state = {
        animation_name : '',
        depth: '',
        fade: ''
      };
    }
  
    closePopUp(){
      this.setState({animation_name: 'animate-out'});
      this.setState({depth:'above'});
       this.setState({fade:'fade-out'});
    }
    openPopUp(){
      this.setState({animation_name: 'animate-in'});
      this.setState({depth:'below'});
      this.setState({fade:'fade-in'});
    }

    render(){
        return (
          <div>
            <button className="opener" id={this.state.depth} onClick={this.openPopUp.bind(this)}>Open Pop Up</button>
            <section id="pop-up" className={this.state.animation_name}>
              <div id="innerPopUp" className={this.state.fade}>
                <div className="border-overlay">
                  <div className="white"></div>
                  <div className="black"></div>
                </div>
                <div className="text">
                  <h1>Hey there</h1>
                  <hr/>
                  <p className="close" onClick={this.closePopUp.bind(this)}>X</p>
                  <p>Just checking in, but maybe did you want to sign up for out newsletter? I hear that all the cool kids are doing it. Plus we might giving away from free stuff. Your choice.</p>
                  <button>Check it out</button>
                </div>
                <div className="photo">
                  <img src="https://static.pexels.com/photos/57905/pexels-photo-57905.jpeg"/>
                </div>
              </div>
            </section>
          </div>
        );
    }
}


