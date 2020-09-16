import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'

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

// use the class based component
class App extends Component{
  render(){
    return(
      <div className="App">
      <h1 className="display-4">
        This is the main Component
      </h1>
      <Person />
      <Person />
    </div>
    );
  }
}

export default App;
