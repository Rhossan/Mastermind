import React from 'react'
import { Button, Header, Icon, Image, Table, Label, Form, Modal } from 'semantic-ui-react'
import fire from '../fire';
import { StyleSheet, css } from 'aphrodite';

class LeaderBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = { scores: [] };
    this.displayHighScores = this.displayHighScores.bind(this);
  }

  displayHighScores = (highScores) => {
    const scores = Object.keys(highScores)
    .map(el => parseInt(el))
    .sort((a,b) => a - b);
  }

  // retrieveHighScores = () => {
  //   fire.database().ref('/scores/').once('value').then( snap => {
  //     let highScores = snap.val();
  //     displayHighScores(highScores);
  //   });
  // };

  componentWillMount = () => {
    debugger
    let scoresRef = fire.database().ref('/scores/').orderByKey().limitToLast(10);
    scoresRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let score = { username: snapshot.val(), score: snapshot.key };
      this.setState({ scores: [score].concat(this.state.scores) });
    })
  }


  render = () => {


    //   return scores ?
    //   <div>
    //     {score[0]}
    //     {score[1]}
    //     {score[2]}
    //     {score[3]}
    //   </div> : ''
    // })
    //<p>{score.username} has a score of {score.score[0]}</p>
    const scores = this.state.scores.map((score,idx) => {
      return (
        <Table.Row>
          <Table.Cell>{idx + 1}</Table.Cell>
          <Table.Cell>{score.username}</Table.Cell>
          <Table.Cell>{score.score[0]}</Table.Cell>
        </Table.Row>
      );
    });

    return (

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

export default LeaderBoard;
