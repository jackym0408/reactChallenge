import logo from './logo.svg';
import './App.css';
import React from 'react';
import Basicinfo from './components/basicInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Stinky",
        age: "500"      
      },
      people: [
        {
          name: "Jacky",
          age: "18",
        }
      ]
    };
  }
  render() {
      return this.state.people.map(function (person, index) {
        return <Basicinfo key="{index}" person={person} />;
      })
  }
}

export default App;