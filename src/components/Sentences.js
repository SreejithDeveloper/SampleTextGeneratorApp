import React, { Component } from 'react';
export class Sentences extends Component{
constructor(props){
super(props);
this.state = {
  sentences: ''
}
}

updateState(e){
  //this.state.sentences = e.target.value;
  this.setState({sentences:e.target.value}, function(){this.props.onSentenceChange(this.state.sentences)});


}



render(){
return (
      <div>
      <p>Select number of sentences.</p>
      <select onChange={this.updateState.bind(this)}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        </div>
        )
}

}
export default Sentences;
