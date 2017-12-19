import React, { Component } from 'react';

export class Paras extends Component{
constructor(props){
super(props);
this.state = {
  paras: props.noOfParas,
}
}

updateState(e){
  this.setState({paras:e.target.value}, function(){this.props.onParaChange(this.state.paras)});


}

render(){
return (
        <div>
        <p>Select number of paragraphs</p>
        <select onChange={this.updateState.bind(this)}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        </div>
      )
}

}
export default Paras;
