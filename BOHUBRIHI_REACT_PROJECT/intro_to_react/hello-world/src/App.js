import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'


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
  render(){
    return(
      <div className="App">
      <h1 className="display-4">
        This is the main Component
      </h1>
      <Person name = "Rahim" age="30" />
      <Person name = "kerim" age="32" />
      <Person name = "javed" age="33" />
      <Person name = "Tanvir" age="34" />
      
    </div>
    );
  }
}

export default App;
