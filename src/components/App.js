import React, { Component } from 'react';
import Paras from   './Paras';
import Sentences from './Sentences';
import Textarea from './Textarea';
import axios from 'axios';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        text:'',
        sentences:2,
        paras:2

      }

      this.getSampleText.bind(this);
    }


componentWillMount(){

  this.getSampleText();
}

getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&sentences='+this.state.sentences+'&start-with-lorem=1&format=html')
      .then((response) => {
        this.setState({text: response.data}, function(){
          console.log(response.data); console.log(this.state.text);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
updateSentences(number){
  this.setState({sentences: number}, this.getSampleText);
}

updateParas(number){
  this.setState({paras:number}, this.getSampleText);
}

render(){
    return (
      <div>
      <Sentences noOfSentences={this.state.sentences} onSentenceChange = {this.updateSentences.bind(this)}/>
      <Paras noOfParas={this.state.paras} onParaChange = {this.updateParas.bind(this)}/>
      <Textarea value={this.state.text}/>
      </div>
    );
  }
}
export default App;
