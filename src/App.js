import React, { Component } from 'react';
import './App.css';
import List from './components/list'
const token = 'Bearer UE77YIdrhhq4iEXsLkqR_e2KPG0eBILqJOkmy3BbR1iuTTHCHhLOanVCSyEYyKF2qR21vfmFjeQVyQidtX4zufMG66477uWr78c18YN3QCJNGQp_m7nVncCiKRmvmMf-5JJfqhdkY8miHGIxR13u7_uKY3sBEzhgV4JZfUfkwUz3tlLYQJ-_B-zfnMVCGOo3JjkxY3MQoJJW_BNJo_NHPuKusShhgpptBvO1jGXmMrleCcHlYi-iybZeLCSEzwHT7HtFfhu9Iqpcj7OpeCUM6QwjoL0lWJ48P6LLMLsjgVIZBIRmWKpHJU0Jj6dBBI4X';
const url = 'http://121.40.166.27:7991/api/companies/1/stats?type=2';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'List',
      list: [1,2,3,4,5]
    }
  }
  handleClick() {
    this.setState({
      list: [23, 2, 5, 6, 7, 8, 9]
    })
  }

  componentDidMount() {
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application / json, text / plain, * /*',
        'Authorization': token
      }
    }).then(res => res.json()).then(
      (data) => {
        console.log(data);
      }
    );
  }
  render() {
    return (
      <div className="App">
        <span>react test</span>
        <List name={ this.state.name } list={ this.state.list }/>
        <button onClick={this.handleClick.bind(this)}>Change Values</button>
      </div>
    );
  }
}

export default App;
