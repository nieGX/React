import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
let welcomeText = <h1> Hello,React!</h1>;
class App extends Component {
  state = {
    characters: [],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((item, i) => i !== index),
    });
  };
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        {welcomeText}
        <h2>Hello,World!</h2>
        <div className="container">
          <Table
            charactersData={characters}
            removeCharacter={this.removeCharacter}
          />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
