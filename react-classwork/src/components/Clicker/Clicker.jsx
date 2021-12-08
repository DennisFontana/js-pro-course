import React from "react";
import './clicker.css';


export class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculate: 0
    }
  }
  componentDidMount() {
    
  }
  counterUp = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      calculate: prevState.calculate + 1
    }))
  }
  counterDown = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      calculate: prevState.calculate - 1
    }))
  }
  refresh = (e) => {
    e.preventDefault();
    this.setState({
      calculate: 0
    })
  }

  render() {
    const {calculate} = this.state;
    return(
      <div className="styleClick">
        <div className="showCalc">{calculate}</div>
        <div className="plus"><button onClick={this.counterUp}><i class="fas fa-plus"></i></button></div>
        <div className='sync'><button onClick={this.refresh}><i class="fas fa-sync-alt"></i></button></div>
        <div className='minus'><button onClick={this.counterDown}><i class="fas fa-minus"></i></button></div>
       
      </div>
      
    )
  }
}