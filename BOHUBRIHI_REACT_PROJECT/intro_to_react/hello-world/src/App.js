import React from 'react';
import './App.css';


// this is a function based component

function App() {

  // the return will be jsx
  // we can do it jsvascript 


  return (
    <div className="App">
      <h1 className="display-4">
        This is the main Component
      </h1>
      <Person />

      <Person />
    </div>
  );

  // first parameter is the 
  // element and other is the additional settings

  // this is the javascript way
  // but this is not the easy way
  // return React.createElement('div',{"className":"App"},React.createElement('h1',null,"hello world"),<Person />);

}


// make anohter componen here
function Person(){
  return(
    <div>
      <h1> This is a child Component </h1>

    </div>
    

    );

  // return React.createElement('div',null,React.createElement('h1',null,"This is a child component"))
}


// this app is exported here and then it will be
// imported from the index js
export default App;
