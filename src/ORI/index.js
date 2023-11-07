
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './style.css';

// const title = 'React 18 with Webpack 5 and Babel';

// ReactDOM.render(
//   <div className={styles.title}>{title}</div>,
//   document.getElementById('app')
// );

// const Counter = () => {
//   const [count, setCount] = useState(0)

//   const handleClickEvent = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//     <p>You clicked {count} times</p>
//     <button onClick={handleClickEvent}>Click me</button>
//     </div>
//   )
// }

// function App() {
//   const [title, setTitle] = useState('Hooks');

//   useEffect(() => {
//     document.title = title;
//   });

//   return (
//     <div>
//       <input  value={title} onChange={e => setTitle(e.target.value)}/>
//     </div>
//   );
// }

// const DataHOF = (url, WrappedComponent) =>
//   () => {
//     const [data, setData] = useState([])

//     const loadData = useCallback(() => {
//         axios.get(url)
//              .then(res => {
//                  setData(res.data)
//              })
//              .catch(error => {
//       		 console.log(error)
//     	     })
//     })
          
//     const unsetData = useCallback(() => {
//         setData([])
//     })
    
//     let button = <button onClick = {loadData}>LOAD DATA</button>;
//     let content = <div></div>;
//     if (data.length > 0) {
//         button = <button onClick = {unsetData}>UNSET DATA</button>;
//         content = <WrappedComponent data={data} />;  
//     }

//     return (   
//         <div>
//             <h2>React Mini App</h2>
//             {button}
//             {content}
//         </div>
//     )                                   
// }

// const url_to_api = "https://jsonplaceholder.typicode.com/users";
// const UserTableWithData = DataHOF(url_to_api, UserTable)

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