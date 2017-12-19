import React, { Component } from 'react';
export class Textarea extends Component{
constructor(props){
  super(props);
 this.state = {
   value: null
  }

}


componentDidReceiveProps(){
  this.setState({value:this.props.value});
}
render(){
return (
    <div>
    <p>Loren Ipsum text area.</p>

        {this.props.value}
     </div>
  )
}

}

export default Textarea;
