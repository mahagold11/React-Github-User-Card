import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import './App.css'


class App extends React.Component {
  state = {
    user:[]
  }

  componentDidMount(){
    axios
    .get("https://api.github.com/users/mahagold11")
    .then(user => {
      console.log("bk: app.js: CDM: fetch: then2: users: ", user.data);
      this.setState({user : user.data})
    })
    .catch(err=>console.log(err))
  }

  render () {
    return (
      <div className="App">
        <UserCard 
          user = {this.state.user}
        />

      </div>
    );
  }
}

export default App;
