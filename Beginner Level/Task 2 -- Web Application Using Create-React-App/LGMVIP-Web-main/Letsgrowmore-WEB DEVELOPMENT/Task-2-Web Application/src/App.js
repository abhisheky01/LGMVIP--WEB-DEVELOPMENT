var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')




import Users from "./Components/Card";
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      users_data: [],
      loading: true
    }


    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    // document.getElementById("main").style.display='flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then(response => response.json())
      .then((users) => {

        this.setState({
          users_data: users.data,
          loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (<>
      <nav>
        <div className="box">
          <div className="row">
            <div className="column1">
              <h2>TEAM ROYAL</h2>
            </div>
            <div className="column2">
              <button onClick={this.updateState}>GET USERS</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="box2">
        <Users loading={this.state.loading} users={this.state.users_data} />
      </div>
    </>
    )
  }
}

export default App;