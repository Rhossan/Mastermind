import React from 'react'
import { Button, Header, Icon, Form, Modal } from 'semantic-ui-react'
import fire from '../fire';

class EndGameModal extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        username: ''
      };
      this.update = this.update.bind(this);
      this.writeScore = this.writeScore.bind(this);
      this.resetGame = this.resetGame.bind(this);
    }

    resetGame = (e) => {
      e.preventDefault();
      this.props.props.postNewAnswer();
    }

    update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

    writeScore = () => {
      const scoreRefs = fire.database().ref('scores/' + `${this.props.props.score}` + `${new Date()}`);
      scoreRefs.set(this.state.username);

    };


    render = () => {
      return (
        <div>
        <Modal open={this.props.isWinner} basic size='small'>
          <Header icon='winner' content='Mastermind Champ!' />
          <Modal.Content>
            <p>
              Winner Winner! Let's put you on the LeaderBoard!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Form>
              <Form.Input fluid label='First name' placeholder='First name' defaultValue={this.state.username}
                onChange={this.update('username')} />
              <Form.Button color='green' inverted onClick= {this.writeScore}>Submit</Form.Button>
              <Form.Button color='black' inverted onClick= {this.resetGame}>Start New Game</Form.Button>
            </Form>
          </Modal.Actions>
        </Modal>

        <Modal open={this.props.isLoser} basic size='small'>
          <Header icon='time' content='Game Over..' />
          <Modal.Content>
            <p>
              Sorry you couldn't win. But dont fret! With enough practice you'll be a mastermind champ!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Form>
              <Form.Button color='black' inverted onClick= {this.resetGame}>Start New Game</Form.Button>
            </Form>
          </Modal.Actions>
        </Modal>
        </div>
      )
    }
}

export default EndGameModal;
