import React from "react";

class Game extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activities: this.props.activities
      }
    }
  render() {
    return <div>yo</div>
  }
}

export default Game;
