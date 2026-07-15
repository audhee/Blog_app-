import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const title =  `Welcome to the new blog`
  const likes = 50;
  const link = "http://www.google.com";
  const person = { name:'yoshi', age:30}
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p> Liked { likes } times</p>
        {/*<p>{person}</p>*/}
        <p>{ person.name }</p>
        <p>{ [1,2,3,4,5,6] }</p>
        <p>{Math.random()*100}</p>
        <a href={link}>Google it</a>
      </div>
    </div>
  );
}

export default App;
