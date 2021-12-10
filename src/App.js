import './App.css';
import SearchField from './components/search-input.component';
import MonstersList from './components/monsters-list.component';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: '',
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    this.setState(prevState => (prevState.monsters = data));
  }

  handleChange = eventPeram => {
    this.setState(
      prevState => (prevState.searchValue = eventPeram.target.value)
    );
  };

  render() {
    const filterdMonsters = this.state.monsters.filter(monsterObj =>
      monsterObj.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase())
    );
    return (
      <div className="app">
        <h1 className="app__title">Monsters Rolodex</h1>
        <SearchField
          handleChangeFunction={this.handleChange}
          placeholderValue="Search for Monsters..."
        />

        <MonstersList monstersData={filterdMonsters} />
      </div>
    );
  }
}

export default App;
