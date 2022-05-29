import React from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import CardList from './Components/CardList';
import axios from 'axios';
import ScrollButton from './Util/ScrollToTop'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Util/theme';
import { GlobalStyles } from './Util/Global';
import Toggle  from './Util/Toggle';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './Util/Route';
import CardDetails from './Components/CardDetails';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

let Monster = [];
function App() {
  
  const [searchField, setSearchField] = React.useState("");
  const [monsters, setMonsters] = React.useState([]);
  const [filteredMonsters, setFilterMonsters] = React.useState(monsters);

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  React.useEffect(() => {
    const getMonsters = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          Monster = res.data;
          setMonsters({ Monster });
        })
    }
    getMonsters();
  }, []);
  

  React.useEffect(() => {
    const newFilteredMonsters = Monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (props) => {
    const searchFieldString = props.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  return (
    <BrowserRouter>
      {/* <RoutesComponent/> */}
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <React.Fragment>
            <div className="App">
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              <div className='header'>
                <h1 className="app-title">Monsters Rolodex</h1>
                <SearchBox className={`monsters-search-box-${theme}`}
                  onChangeHandler={onSearchChange}
                  theme={theme}
                  placeholder="search..." />
              </div>
              <CardList monsters={filteredMonsters} />
              <ScrollButton />
            </div>
        </React.Fragment>
      </ThemeProvider>
      {/* <switch>
        <Route exact path="/" component={App} />
    <Route path="/CardDetails" component={CardDetails} exact />
      </switch> */}
    </BrowserRouter>
  );
}

export default App;
