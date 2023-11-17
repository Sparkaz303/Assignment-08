import React, { useState } from 'react';
import './App.css';

function App() {
  {/* Declare a new state array variable */}
  const [list, setList] = useState([]);
  {/* Declare a new state string variable */}
  const [value, setValue] = useState("");

  const addTo = () =>{
    setList([...list, value])
    setValue("  ")
  }

  const deleteTo = (index) => {
    const  taskCopy = [...list]
    taskCopy.splice(index,1)
    setList(taskCopy)
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {/* Add an input box */}
      <input 
        type="text"
        value={value}

        onChange={(i) => {setValue(i.target.value)} }/>
      <button onClick={addTo}>Add</button>

      
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}> 
              {item} <span onClick={() => deleteTo(index)} >x</span>
            </li>
          )
        })}

      </ul>
      
    </div>
  );

      }
export default App;
