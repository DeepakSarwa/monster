import { Component } from 'react';
// import logo from './logo.svg';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filtermonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='text-title'> MONSTERS ROLODEX</h1>
        <SearchBox className='search-box' 
        onChangeHandler={onSearchChange} 
        placeholder='Type to Search' />
        <CardList monsters={filtermonsters} />
      </div>
    );
  }
}

export default App;
