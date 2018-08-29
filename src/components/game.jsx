import React from "react";
import GuessForm from './guessForm'
import EndGameModal from './endGameModal'
import LeaderBoardModal from './leaderBoardModal';
import BlackSquare from "../assets/black-square.png";
import RedSquare from "../assets/red-square.png";

import { StyleSheet, css } from "aphrodite";
import { Button, Divider, Header, Icon, Image, Table, Label, Form, Modal } from 'semantic-ui-react'


class Game extends React.Component{
  constructor(props) {
      super(props);
      this.resetGame = this.resetGame.bind(this);
      this.mapEachTurn = this.mapEachTurn.bind(this);
      this.getLabel = this.getLabel.bind(this);
      this.getPegLabels = this.getPegLabels.bind(this);
    }


    resetGame = (e) => {
      e.preventDefault();
      this.props.postNewAnswer();
    }
    mapEachTurn = () => {
      const {slots, pegs} = this.props.guesses;
      let mappings = [];
      for(let i = 0; i < slots.length; i++){
        let score = { slot: slots[i], peg: pegs[i], turn: i };
        mappings = mappings.concat(score);
      }
      return mappings;
    }
    getLabel = (slot) => {
      const colorSlots = {
        0: 'brown',
        1: 'orange',
        2: 'yellow',
        3: 'olive',
        4: 'green',
        5: 'teal',
        6: 'blue',
        7: 'violet',
        8: 'purple',
        9: 'pink'
      }
      let label = slot.map(part => {
        return(
          <Label circular color={colorSlots[part]} key={colorSlots[part]}  size='large'>
            {part}
          </Label>
        )
      })
      return label
    }

    getPegLabels = (peg) => {
      debugger
      const color = {
        2: RedSquare,
        1: BlackSquare
      }
      let label = peg.map(part => {
        return(
          <Label>
            <Image src={color[part]} size='mini' />
          </Label>
        )
      })
      return label;
    }
  render() {
    const {slots, pegs} = this.props.guesses;

    let mappings = this.mapEachTurn();

    const guesses = mappings.map((guess, idx) => {
      return (
        <Table.Row>
          <Table.Cell>
            {this.getLabel(guess.slot)}
          </Table.Cell>
          <Table.Cell>
            {this.getPegLabels(guess.peg)}
          </Table.Cell>
          <Table.Cell>{guess.turn+1}</Table.Cell>
        </Table.Row>
      );
    });

    const winner =  JSON.stringify(pegs[pegs.length-1]) === JSON.stringify([2,2,2,2]);
    return (
      <div>

        <div className={css(styles.tableContainer)}>
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Mastermind</Header.Content>
        </Header>
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Slot</Table.HeaderCell>
            <Table.HeaderCell>Peg</Table.HeaderCell>
            <Table.HeaderCell>Turn</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {guesses}
        </Table.Body>
      </Table>
  </div>

        <div className={css(styles.formContainer)}>
          <GuessForm props={this.props}/>
          <Divider horizontal>More Options</Divider>
            <Button secondary onClick={this.resetGame}>Reset</Button>
            <EndGameModal props={this.props} isWinner={winner}/>
            <LeaderBoardModal/>
          </div>

      </div>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #C4C4C4",
    height: "49px"
  },
  headerTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginLeft: "20px",
    cursor: "pointer"
  },
  headerTitleManagement: {
    color: "#01b4c0"
  },
  headerUserContainer: {
    display: "flex",
    minHeight: "100%",
    justifyContent: "space-between",
    width: "125px"
  },
  headerUser: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "150px",
    color: "#01b4c0",
    fontSize: "18px"
  },
  headerUserSelection: {
    marginLeft: "25px"
  },
  childrenContainer: {
    height: "calc(100vh - 49px)",
    overflowX: "hidden"
  },
    tableContainer: {
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px'
  },
    formContainer: {
    marginTop: '50px',
    marginLeft: '100px',
    marginRight: '100px'
}

});

export default Game;
