import React, {Component} from 'react';
import Shape from './Shape';

class Selector extends Component{

  constructor(){
    super();
    this.state={
      selectedShape: 'square',
    }
  }
selectShape = (shapeName)=>{
  console.log('[selectShape(shapeName)]: ' + shapeName);
  this.setState({
    selectedShape: shapeName,
  })
}

  render(){
    return(
          <div>
            <div className="container">
            <div className="navbar">Selected: <span>{this.state.selectedShape}</span></div>
            <div className="shape-list">
                <Shape shape="square" selectShape={this.selectShape}/>
                <Shape shape="circle" selectShape={this.selectShape} />
                <Shape shape="triangle" selectShape={this.selectShape}/>
               
               

            </div>
            </div>
          </div>
        )



    
  }
}
export default Selector;