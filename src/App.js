import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
  const [item,setItem]=useState([])
  useEffect(()=>{
    const FetchingItems= async ()=>{
      const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response.data)
      setItem(response.data)
    }
    FetchingItems()
  },[])
  return (
    <div className="App">
      <h1>All Items</h1>
      {item.map((eachItem,index) =>{
        return(
          <div key={index}>
            <h1>{eachItem.title}</h1>
            <p>{eachItem.body}</p>
          </div>
        )
      })}
    
    </div>
  );
}

export default App;
