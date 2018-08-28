import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  // this.handleSubmit = this.handleSubmit.bind(this);
  this.update = this.update.bind(this);
  this.submit = this.submit.bind(this);
  this.resetState = this.resetState.bind(this);
  }

  // update = (e) => {
  //         this.setState({value: [...this.state.value,e.target.value]});
  //         console.log('Dropdown changed');
  //         return;
  //     }
  //
  update = (e, { value }) => {
    this.setState({ value });
  }

  resetState = () => {
    this.setState({
      value: []
    })
  }

  determinePegs = (slot) => {
    debugger
    let copySlot = slot.slice();
    let copyAnswer = this.props.props.answer.slice();
    let arr = [];
    let correctLocations = 0;
    for (let i = 0; i < copySlot.length; i++) {
      if(copySlot[i] === (copyAnswer[i]).toString()) {
        copySlot.splice(i,1);
        copyAnswer.splice(i,1);
        arr.push(2);
      }
    }
    for (let i = 0; i < copySlot.length; i++) {
      if(copySlot.indexOf(copyAnswer[i].toString()) != -1) {
        arr.push(1);
      }
    }

    while(arr.length < 4){
      arr.push(0);
    }
    return arr;
  }

  submit = (e) => {
    e.preventDefault();
    const pegs = this.determinePegs(this.state.value)
    this.props.props.postNewGuess({
      slot: this.state.value,
      peg: pegs
    });
    this.resetState();
  }

  getOptions = () => {
    return [
      {key: '0', text: '0', value: '0'},
      {key: '1', text: '1', value: '1'},
      {key: '2', text: '2', value: '2'},
      {key: '3', text: '3', value: '3'},
      {key: '4', text: '4', value: '4'},
      {key: '5', text: '5', value: '5'},
      {key: '6', text: '6', value: '6'},
      {key: '7', text: '7', value: '7'},
      {key: '8', text: '8', value: '8'},
      {key: '9', text: '9', value: '9'}
    ];
  };

  render(){
    const options = this.getOptions();
    return(
      <div>
        <Dropdown
         placeholder='Select'
         name="number"
         onChange={this.update}
         fluid multiple selection
         options={options}
         value={this.state.value} />
       <Button primary onClick={this.submit}>Guess</Button>
      </div>
    );
  }
}

export default GuessForm;
