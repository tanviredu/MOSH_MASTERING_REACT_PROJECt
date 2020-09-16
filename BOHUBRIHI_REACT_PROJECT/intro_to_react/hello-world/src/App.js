import React from 'react';
import './App.css';


// this is a function based component

function App() {
  return (
    <div className="App">
      <h1 className="display-4">
        This is the main Component
      </h1>
      <Person />
      
      <Person />
    </div>
  );
}


// make anohter componen here
function Person(){
  return(
    <div>
      <h1> This is a child Component </h1>

    </div>
    

    );
}


// this app is exported here and then it will be
// imported from the index js
export default App;
