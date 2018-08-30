# Mastermind

[Live](https://mastermind-2ccf3.firebaseapp.com)

### Background
Master Mind is a code-breaking game for two players. The modern game with pegs was invented in 1970 by Mordecai Meirowitz, 

### Functionality & How to play
* At the start of the game, four UNIQUE positive numbers are chosen randomly.
* We can have 1-2-3-4 or 9-0-1-8, BUT NOT REPEATS: 9-2-2-1 is not allowed!
* Click the dropdown field and select four numbers. Then hit the guess button
* A red peg will designate that one of the numbers is correctly chosen and is in the RIGHT position
* A black peg will designate that one of the numbers is correctly chosen and is in the WRONG position
* You will have 10 turns to guess the correct sequence
* You can click the reset button to begin the game again
* Good Luck!

### Architecture and Technologies
This project was implemented with the following technologies:

- `JavaScript` for game logic,
- `React-Redux` front-end development,
- `Firebase` to host game and persist high scores to Firebase NoSQL cloud database.
- `Webpack` to bundle js files.
- `Semantic-ui-react` for CSS logic
- `aphrodite` for CSS logic


### MVP Checklist
- [ ] Responsive feedback letting the player know if he is correct or not
- [ ] Store player's name and score into a database (firebase)
- [ ] Display a leaderboard
- [ ] Show the player if a number is part of the sequence, but in the wrong place
- [ ] Create an API with endpoints to display all players and their scores and
individual player’s score.

### High Score Snippets

#### Get High Scores from database
After component Mounts, retrieves the high scores from the Firebase NoSQL database asynchronously, and adds to the state
````js
componentWillMount = () => {
    let scoresRef = fire.database().ref('/scores/').orderByKey().limitToLast(10);
    scoresRef.on('child_added', snapshot => {
      let score = { username: snapshot.val(), score: snapshot.key[0] };
      this.setState({ scores: [score].concat(this.state.scores) });
    })
  }
````

#### Display high scores
The render function in the LeaderBoardModal component will sort the scores objects retrieved from the database, 
and map those values onto the cells of the table being constructed. Finally rendering the table that will hold our top scores
````js
render = () => {

    let scores = this.state.scores.sort((a,b) => {
      return a.score[0] - b.score[0];
    })
    scores = scores.map((score,idx) => {
      return (
        <Table.Row key={idx}>
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
````

#### Write high score to database
Once props passed down to EndGameModal specify the isWinner boolean is set to true, our winner modal will pop up, allowing the player to input his name, to be saved into the database
````js
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
        
        ......
````
