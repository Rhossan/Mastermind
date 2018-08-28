import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class EndGameModal extends React.Component{
  constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
    }
}

  render = () => {
    return (
      <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <p>
            Winner Winner! Let's put you on the LeaderBoard!
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }



export default EndGameModal;
