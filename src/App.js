
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          firstname: "Juan",
          lastname: "De la Cruz",
          age: 21
        },

        {
          firstname: "Mark",
          lastname: "Paul",
          age: 22
        },

        {
          firstname: "Paul",
          lastname: "Mark",
          age: 23
        }
      ]
    };
  }
  render() {
    return (
      <div id ="main">
        <h1>
          {this.state.array.map((item, index) => (
            <h3 key={index}>
              {item.firstname + " " + item.lastname + " , " + item.age}
            </h3>
          ))}
        </h1>
      </div>
    );
  }
}
export default App;