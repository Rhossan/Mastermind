import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import Mastermind from "../assets/mastermind.jpg";

class TutorialModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOpen: true };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal = () => {
    this.setState({ isOpen: false });
  }
  render = () => {
    return (
      <div>
        <Modal open={this.state.isOpen} centered={false}>
          <Modal.Header>Welcome to Mastermind, the hottest game on the web!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={Mastermind} />
            <Modal.Description>
              <Header>How to Play</Header>
              <p>At the start of the game, four UNIQUE positive numbers are chosen randomly. </p>
              <p>We can have 1-2-3-4 or 9-0-1-8, BUT NOT REPEATS: 9-2-2-1 is not allowed!</p>
              <p>Click the dropdown field and select four numbers. Then hit the guess button</p>
              <p>A red peg will designate that one of the numbers is correctly chosen and is in the RIGHT position</p>
              <p>A black peg will designate that one of the numbers is correctly chosen and is in the WRONG position</p>
              <p>You will have 10 turns to guess the correct sequence</p>
              <p>You can click the reset button to begin the game again</p>
              <p>Good Luck!</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Form>
              <Form.Button color='green' inverted onClick= {this.closeModal}>Let's Begin</Form.Button>
            </Form>
          </Modal.Actions>
        </Modal>

        <Modal trigger={<Button color='green'>Tutorial</Button>} centered={false}>
          <Modal.Header>Welcome to Mastermind, the hottest game on the web!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={Mastermind} />
            <Modal.Description>
              <Header>How to Play</Header>
              <p>At the start of the game, four UNIQUE positive numbers are chosen randomly. </p>
              <p>We can have 1-2-3-4 or 9-0-1-8, BUT NOT REPEATS: 9-2-2-1 is not allowed!</p>
              <p>Click the dropdown field and select four numbers. Then hit the guess button</p>
              <p>A red peg will designate that one of the numbers is correctly chosen and is in the RIGHT position</p>
              <p>A black peg will designate that one of the numbers is correctly chosen and is in the WRONG position</p>
              <p>You will have 10 turns to guess the correct sequence</p>
              <p>You can click the reset button to begin the game again</p>
              <p>Good Luck!</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>

    )
  }
}

export default TutorialModal;
