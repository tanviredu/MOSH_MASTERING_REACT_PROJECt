import React, {Component} from 'react';
import './App.css';
import Book from "./components/Book";

// this is function based component


// function App() {
//   return (
//     <div className="App">
//       <h1 className="display-4">
//         This is the main Component
//       </h1>
//       <Person />
//       <Person />
//     </div>
//   );
// }


// this is clas based component

class App extends Component{
    // lets see whats indie the component
  render(){
    return(
      <div className="App">
      <h1 className="display-1">
              Book Lists
      </h1>
              <hr></hr>
              <Book bookname="1984" writer="gefroy hinton" />
              <Book bookname="The vinci code" writer="Dan brown" />
              <Book bookname="harry potter" writer="j.K Rowling" />
      
      
    </div>
    );
  }
}

export default App;
