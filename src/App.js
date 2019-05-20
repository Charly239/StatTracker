import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.fortnitetracker.com/v1/profile/xb1/bbxcharly",{
          method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
            'TRN-Api-Key': 'dfb9a605-ec4b-4c65-a0a5-c4bb6e81a1c3', //it can be iPhone or your any other attribute
          }
        }
    ).then(res => res.json())
        .then(json => {
              this.setState({
                isLoaded: true,
                  item: json,
                });

              });
            }


  render() {
    const { isLoaded, items } = this.state;
     if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div className = "App">
            <ul>
              {items.map(item => (
                  <li key={item.stats}>
                      Name: {item.kills}
                  </li>
              ))}
            </ul>
          </div>
      );
    }
  }
}

export default App;