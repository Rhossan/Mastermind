import React from 'react'
import { Button, Header, Icon, Image, Table, Label, Form, Modal } from 'semantic-ui-react'
import fire from '../fire';
import { StyleSheet, css } from 'aphrodite';

class LeaderBoardModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { scores: [] };
  }

  componentWillMount = () => {

    let scoresRef = fire.database().ref('/scores/').orderByKey().limitToLast(10);
    scoresRef.on('child_added', snapshot => {
      let score = { username: snapshot.val(), score: snapshot.key[0] };
      this.setState({ scores: [score].concat(this.state.scores) });
    })
  }


  render = () => {

    let scores = this.state.scores.sort((a,b) => {
      return a.score[0] - b.score[0];
    })
    debugger
    scores = scores.map((score,idx) => {
      return (
        <Table.Row>
          <Table.Cell>{idx + 1}</Table.Cell>
          <Table.Cell>{score.username}</Table.Cell>
          <Table.Cell>{score.score[0]}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Modal trigger={<Button color='pink'>LeaderBoard</Button>} centered={false}>
        <Header icon='users' content='Mastermind LeaderBoard!' />
        <Modal.Content>
          <div className={css(styles.tableContainer)}>
        <div>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Leaderboard</Header.Content>
          </Header>
        </div>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ranking</Table.HeaderCell>
              <Table.HeaderCell>User</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {scores}
          </Table.Body>
        </Table>
    </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> Close
          </Button>

        </Modal.Actions>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px'
  }
})

export default LeaderBoardModal;
