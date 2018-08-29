import React from 'react'
import { Button, Header, Icon, Form, Modal } from 'semantic-ui-react'
import fire from '../fire';

class EndGameModal extends React.Component{
  constructor(props) {
      super(props);
      // this.submit = this.submit.bind(this);
      this.state = {
        username: ''
      };
      this.update = this.update.bind(this);
      this.writeScore = this.writeScore.bind(this);
    }

    update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

    writeScore = () => {
      // const scoreRefs = fire.database().ref('scores/' + `${this.props.props.score}`);
      const scoreRefs = fire.database().ref('scores/' + `${this.props.props.score}` + `${new Date()}`);
      scoreRefs.set(this.state.username);
    };

    render = () => {
      return (
        <Modal trigger={<Button>score</Button>} basic size='small'>
          <Header icon='winner' content='Mastermind Champ!' />
          <Modal.Content>
            <p>
              Winner Winner! Let's put you on the LeaderBoard!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted>
              <Icon name='remove' /> No
            </Button>
            <Form>
              <Form.Input fluid label='First name' placeholder='First name' defaultValue={this.state.username}
                onChange={this.update('username')} />
              <Form.Button color='green' inverted onClick= {this.writeScore}>Submit</Form.Button>
            </Form>

          </Modal.Actions>
        </Modal>
      )
    }
}




// <Button color='green' inverted onClick= {this.writeScore}>
//   <Icon name='checkmark' /> Yes
// </Button>
export default EndGameModal;
