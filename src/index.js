
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './style.css';

const url = "https://jsonplaceholder.typicode.com/users";

const UserTable = ({data}) => <table id="tab">
   <thead><tr><th>Name</th><th>Email</th></tr></thead>
   <tbody>{data.map((user, i) => <tr key = {i}><td>{user.name}</td><td>{user.email}</td></tr>)}</tbody>
   </table>

const App = () => {
  
  const [data, setData] = useState([])

  const loadData = () => {
    axios.get(url)
         .then(res => { setData(res.data) })
         .catch(error => { console.log(error) })
  }
  
  let button = <button onClick = {loadData}>LOAD DATA</button>;
  let content = <div></div>;

  if (data.length > 0) {
      button = <button onClick = {() => {setData([])}}>CLEAR DATA</button>;
      content = <UserTable data={data} />;  
  }

  return (   
      <div>
          <h2>React Mini App</h2>
          <p>Data URL: {url}</p>
          {button}
          {content}
      </div>
  )                                   
}

ReactDOM.render(<App/>, document.getElementById('app'))