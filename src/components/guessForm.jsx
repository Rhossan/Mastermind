import React from 'react';
import { Button, Dropdown, Divider, Modal, Header, Form } from 'semantic-ui-react';
import TutorialModal from "./tutorialModal";

import { StyleSheet, css } from "aphrodite";

class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      tryAgainBool: false
    };
  this.update = this.update.bind(this);
  this.submit = this.submit.bind(this);
  this.resetState = this.resetState.bind(this);
  }


  update = (e, { value }) => {
      this.setState({ value });
  }

  resetState = () => {
    this.setState({
      value: [],
      tryAgainBool: false
    })
  }

  determinePegs = (slot) => {
    let copySlot = slot.slice();
    let copyAnswer = this.props.props.answer.slice();
    let arr = [];
    let correctLocations = 0;
    for (let i = 0; i < copySlot.length; i++) {
      if(copySlot[i] === (copyAnswer[i]).toString()) {
        copySlot[i] = -1
        copyAnswer[i] = -1
        arr.push(2);
      }
    }
    for (let i = 0; i < copySlot.length; i++) {
      if( (copySlot[i] != -1) && (copySlot.indexOf(copyAnswer[i].toString()) != -1) ) {
        arr.push(1);
      }
    }

    return arr;
  }

  submit = (e) => {
    e.preventDefault();
    if(this.state.value.length != 4){
      this.setState({tryAgainBool: true})
    }
    else{
      const pegs = this.determinePegs(this.state.value)
      this.props.props.postNewGuess({
        slot: this.state.value,
        peg: pegs
      });
      this.resetState();
    }

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
         placeholder='Click Here'
         name="number"
         onChange={this.update}
         fluid multiple selection
         options={options}
         value={this.state.value} />
       <Divider horizontal>----</Divider>
       <Button primary onClick={this.submit}>Guess</Button>
       <TutorialModal />

        <Modal open={this.state.tryAgainBool} basic size='small'>
          <Header icon='time' content='Try Again' />
          <Modal.Content>
            <p>
              Make sure you pick four numbers from the dropdown!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Form>
              <Form.Button color='olive' inverted onClick= {this.resetState}>Try Again</Form.Button>
            </Form>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default GuessForm;
